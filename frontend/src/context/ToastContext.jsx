import { createContext, useCallback, useMemo, useState } from 'react';
import { CheckCircle2, Info, TriangleAlert, X, XCircle } from 'lucide-react';

const ToastContext = createContext(null);

let toastIdCounter = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback((message, type = 'info') => {
    toastIdCounter += 1;
    const id = toastIdCounter;
    setToasts((current) => [...current, { id, message, type }]);
  }, [removeToast]);

  const value = useMemo(() => ({ addToast, removeToast }), [addToast, removeToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="toast-container bottom-right">
        {toasts.map((toast) => {
          let Icon = Info;
          if (toast.type === 'success') Icon = CheckCircle2;
          if (toast.type === 'error') Icon = XCircle;
          if (toast.type === 'warning') Icon = TriangleAlert;

          return (
            <div key={toast.id} className={`toast toast-${toast.type}`}>
              <div className="toast-icon">
                <Icon size={20} />
              </div>
              <div className="toast-body">
                <div className="toast-header-row">
                  <strong className="toast-title">
                    {toast.type === 'success' && 'Sucesso'}
                    {toast.type === 'error' && 'Erro'}
                    {toast.type === 'warning' && 'Alerta'}
                    {toast.type === 'info' && 'Informação'}
                  </strong>
                  <button
                    className="toast-close"
                    onClick={() => removeToast(toast.id)}
                    aria-label="Fechar notificação"
                  >
                    <X size={16} />
                  </button>
                </div>
                <p className="toast-message">{toast.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export default ToastContext;
