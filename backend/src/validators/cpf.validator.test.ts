import { isValidCpf } from './beneficiario.validator';

const tests = [
  { cpf: '11144477735', expected: true, description: 'CPF válido sem máscara' },
  { cpf: '12345678909', expected: true, description: 'CPF válido comum' },
  { cpf: '111.444.777-35', expected: true, description: 'CPF válido com máscara' },
  { cpf: '00000000000', expected: false, description: 'CPF inválido sequência repetida' },
  { cpf: '11144477734', expected: false, description: 'CPF inválido dígito verificador incorreto' },
  { cpf: '123.456.789-00', expected: false, description: 'CPF inválido formato correto mas dígito errado' },
  { cpf: '1234567890', expected: false, description: 'CPF muito curto' },
];

let failures = 0;
for (const { cpf, expected, description } of tests) {
  const actual = isValidCpf(cpf);
  if (actual !== expected) {
    console.error(`FAIL: ${description} - ${cpf}: expected ${expected}, got ${actual}`);
    failures += 1;
  } else {
    console.log(`PASS: ${description}`);
  }
}

if (failures > 0) {
  console.error(`${failures} falha(s) de validação de CPF.`);
  process.exit(1);
}

console.log('Todos os testes de CPF passaram.');
