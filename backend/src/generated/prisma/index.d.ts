
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Voluntario
 * 
 */
export type Voluntario = $Result.DefaultSelection<Prisma.$VoluntarioPayload>
/**
 * Model Beneficiario
 * 
 */
export type Beneficiario = $Result.DefaultSelection<Prisma.$BeneficiarioPayload>
/**
 * Model Doacao
 * 
 */
export type Doacao = $Result.DefaultSelection<Prisma.$DoacaoPayload>
/**
 * Model ItemDoacao
 * 
 */
export type ItemDoacao = $Result.DefaultSelection<Prisma.$ItemDoacaoPayload>
/**
 * Model Distribuicao
 * 
 */
export type Distribuicao = $Result.DefaultSelection<Prisma.$DistribuicaoPayload>
/**
 * Model ItemDistribuicao
 * 
 */
export type ItemDistribuicao = $Result.DefaultSelection<Prisma.$ItemDistribuicaoPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model Tipo
 * 
 */
export type Tipo = $Result.DefaultSelection<Prisma.$TipoPayload>
/**
 * Model Tamanho
 * 
 */
export type Tamanho = $Result.DefaultSelection<Prisma.$TamanhoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Voluntarios
 * const voluntarios = await prisma.voluntario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Voluntarios
   * const voluntarios = await prisma.voluntario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.voluntario`: Exposes CRUD operations for the **Voluntario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Voluntarios
    * const voluntarios = await prisma.voluntario.findMany()
    * ```
    */
  get voluntario(): Prisma.VoluntarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.beneficiario`: Exposes CRUD operations for the **Beneficiario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Beneficiarios
    * const beneficiarios = await prisma.beneficiario.findMany()
    * ```
    */
  get beneficiario(): Prisma.BeneficiarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doacao`: Exposes CRUD operations for the **Doacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doacaos
    * const doacaos = await prisma.doacao.findMany()
    * ```
    */
  get doacao(): Prisma.DoacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemDoacao`: Exposes CRUD operations for the **ItemDoacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemDoacaos
    * const itemDoacaos = await prisma.itemDoacao.findMany()
    * ```
    */
  get itemDoacao(): Prisma.ItemDoacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.distribuicao`: Exposes CRUD operations for the **Distribuicao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Distribuicaos
    * const distribuicaos = await prisma.distribuicao.findMany()
    * ```
    */
  get distribuicao(): Prisma.DistribuicaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemDistribuicao`: Exposes CRUD operations for the **ItemDistribuicao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemDistribuicaos
    * const itemDistribuicaos = await prisma.itemDistribuicao.findMany()
    * ```
    */
  get itemDistribuicao(): Prisma.ItemDistribuicaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipo`: Exposes CRUD operations for the **Tipo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipos
    * const tipos = await prisma.tipo.findMany()
    * ```
    */
  get tipo(): Prisma.TipoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tamanho`: Exposes CRUD operations for the **Tamanho** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tamanhos
    * const tamanhos = await prisma.tamanho.findMany()
    * ```
    */
  get tamanho(): Prisma.TamanhoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Voluntario: 'Voluntario',
    Beneficiario: 'Beneficiario',
    Doacao: 'Doacao',
    ItemDoacao: 'ItemDoacao',
    Distribuicao: 'Distribuicao',
    ItemDistribuicao: 'ItemDistribuicao',
    Item: 'Item',
    Tipo: 'Tipo',
    Tamanho: 'Tamanho'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "voluntario" | "beneficiario" | "doacao" | "itemDoacao" | "distribuicao" | "itemDistribuicao" | "item" | "tipo" | "tamanho"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Voluntario: {
        payload: Prisma.$VoluntarioPayload<ExtArgs>
        fields: Prisma.VoluntarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoluntarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoluntarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload>
          }
          findFirst: {
            args: Prisma.VoluntarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoluntarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload>
          }
          findMany: {
            args: Prisma.VoluntarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload>[]
          }
          create: {
            args: Prisma.VoluntarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload>
          }
          createMany: {
            args: Prisma.VoluntarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoluntarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload>[]
          }
          delete: {
            args: Prisma.VoluntarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload>
          }
          update: {
            args: Prisma.VoluntarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload>
          }
          deleteMany: {
            args: Prisma.VoluntarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoluntarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoluntarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload>[]
          }
          upsert: {
            args: Prisma.VoluntarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload>
          }
          aggregate: {
            args: Prisma.VoluntarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoluntario>
          }
          groupBy: {
            args: Prisma.VoluntarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoluntarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoluntarioCountArgs<ExtArgs>
            result: $Utils.Optional<VoluntarioCountAggregateOutputType> | number
          }
        }
      }
      Beneficiario: {
        payload: Prisma.$BeneficiarioPayload<ExtArgs>
        fields: Prisma.BeneficiarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BeneficiarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BeneficiarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiarioPayload>
          }
          findFirst: {
            args: Prisma.BeneficiarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BeneficiarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiarioPayload>
          }
          findMany: {
            args: Prisma.BeneficiarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiarioPayload>[]
          }
          create: {
            args: Prisma.BeneficiarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiarioPayload>
          }
          createMany: {
            args: Prisma.BeneficiarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BeneficiarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiarioPayload>[]
          }
          delete: {
            args: Prisma.BeneficiarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiarioPayload>
          }
          update: {
            args: Prisma.BeneficiarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiarioPayload>
          }
          deleteMany: {
            args: Prisma.BeneficiarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BeneficiarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BeneficiarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiarioPayload>[]
          }
          upsert: {
            args: Prisma.BeneficiarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiarioPayload>
          }
          aggregate: {
            args: Prisma.BeneficiarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBeneficiario>
          }
          groupBy: {
            args: Prisma.BeneficiarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<BeneficiarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.BeneficiarioCountArgs<ExtArgs>
            result: $Utils.Optional<BeneficiarioCountAggregateOutputType> | number
          }
        }
      }
      Doacao: {
        payload: Prisma.$DoacaoPayload<ExtArgs>
        fields: Prisma.DoacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload>
          }
          findFirst: {
            args: Prisma.DoacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload>
          }
          findMany: {
            args: Prisma.DoacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload>[]
          }
          create: {
            args: Prisma.DoacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload>
          }
          createMany: {
            args: Prisma.DoacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload>[]
          }
          delete: {
            args: Prisma.DoacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload>
          }
          update: {
            args: Prisma.DoacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload>
          }
          deleteMany: {
            args: Prisma.DoacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload>[]
          }
          upsert: {
            args: Prisma.DoacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoacaoPayload>
          }
          aggregate: {
            args: Prisma.DoacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoacao>
          }
          groupBy: {
            args: Prisma.DoacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoacaoCountArgs<ExtArgs>
            result: $Utils.Optional<DoacaoCountAggregateOutputType> | number
          }
        }
      }
      ItemDoacao: {
        payload: Prisma.$ItemDoacaoPayload<ExtArgs>
        fields: Prisma.ItemDoacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemDoacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDoacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemDoacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDoacaoPayload>
          }
          findFirst: {
            args: Prisma.ItemDoacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDoacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemDoacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDoacaoPayload>
          }
          findMany: {
            args: Prisma.ItemDoacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDoacaoPayload>[]
          }
          create: {
            args: Prisma.ItemDoacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDoacaoPayload>
          }
          createMany: {
            args: Prisma.ItemDoacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemDoacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDoacaoPayload>[]
          }
          delete: {
            args: Prisma.ItemDoacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDoacaoPayload>
          }
          update: {
            args: Prisma.ItemDoacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDoacaoPayload>
          }
          deleteMany: {
            args: Prisma.ItemDoacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemDoacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemDoacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDoacaoPayload>[]
          }
          upsert: {
            args: Prisma.ItemDoacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDoacaoPayload>
          }
          aggregate: {
            args: Prisma.ItemDoacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemDoacao>
          }
          groupBy: {
            args: Prisma.ItemDoacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemDoacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemDoacaoCountArgs<ExtArgs>
            result: $Utils.Optional<ItemDoacaoCountAggregateOutputType> | number
          }
        }
      }
      Distribuicao: {
        payload: Prisma.$DistribuicaoPayload<ExtArgs>
        fields: Prisma.DistribuicaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DistribuicaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistribuicaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DistribuicaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistribuicaoPayload>
          }
          findFirst: {
            args: Prisma.DistribuicaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistribuicaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DistribuicaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistribuicaoPayload>
          }
          findMany: {
            args: Prisma.DistribuicaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistribuicaoPayload>[]
          }
          create: {
            args: Prisma.DistribuicaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistribuicaoPayload>
          }
          createMany: {
            args: Prisma.DistribuicaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DistribuicaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistribuicaoPayload>[]
          }
          delete: {
            args: Prisma.DistribuicaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistribuicaoPayload>
          }
          update: {
            args: Prisma.DistribuicaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistribuicaoPayload>
          }
          deleteMany: {
            args: Prisma.DistribuicaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DistribuicaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DistribuicaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistribuicaoPayload>[]
          }
          upsert: {
            args: Prisma.DistribuicaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistribuicaoPayload>
          }
          aggregate: {
            args: Prisma.DistribuicaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDistribuicao>
          }
          groupBy: {
            args: Prisma.DistribuicaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DistribuicaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DistribuicaoCountArgs<ExtArgs>
            result: $Utils.Optional<DistribuicaoCountAggregateOutputType> | number
          }
        }
      }
      ItemDistribuicao: {
        payload: Prisma.$ItemDistribuicaoPayload<ExtArgs>
        fields: Prisma.ItemDistribuicaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemDistribuicaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDistribuicaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemDistribuicaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDistribuicaoPayload>
          }
          findFirst: {
            args: Prisma.ItemDistribuicaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDistribuicaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemDistribuicaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDistribuicaoPayload>
          }
          findMany: {
            args: Prisma.ItemDistribuicaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDistribuicaoPayload>[]
          }
          create: {
            args: Prisma.ItemDistribuicaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDistribuicaoPayload>
          }
          createMany: {
            args: Prisma.ItemDistribuicaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemDistribuicaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDistribuicaoPayload>[]
          }
          delete: {
            args: Prisma.ItemDistribuicaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDistribuicaoPayload>
          }
          update: {
            args: Prisma.ItemDistribuicaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDistribuicaoPayload>
          }
          deleteMany: {
            args: Prisma.ItemDistribuicaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemDistribuicaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemDistribuicaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDistribuicaoPayload>[]
          }
          upsert: {
            args: Prisma.ItemDistribuicaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDistribuicaoPayload>
          }
          aggregate: {
            args: Prisma.ItemDistribuicaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemDistribuicao>
          }
          groupBy: {
            args: Prisma.ItemDistribuicaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemDistribuicaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemDistribuicaoCountArgs<ExtArgs>
            result: $Utils.Optional<ItemDistribuicaoCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      Tipo: {
        payload: Prisma.$TipoPayload<ExtArgs>
        fields: Prisma.TipoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          findFirst: {
            args: Prisma.TipoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          findMany: {
            args: Prisma.TipoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>[]
          }
          create: {
            args: Prisma.TipoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          createMany: {
            args: Prisma.TipoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>[]
          }
          delete: {
            args: Prisma.TipoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          update: {
            args: Prisma.TipoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          deleteMany: {
            args: Prisma.TipoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>[]
          }
          upsert: {
            args: Prisma.TipoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          aggregate: {
            args: Prisma.TipoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipo>
          }
          groupBy: {
            args: Prisma.TipoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoCountArgs<ExtArgs>
            result: $Utils.Optional<TipoCountAggregateOutputType> | number
          }
        }
      }
      Tamanho: {
        payload: Prisma.$TamanhoPayload<ExtArgs>
        fields: Prisma.TamanhoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TamanhoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TamanhoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TamanhoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TamanhoPayload>
          }
          findFirst: {
            args: Prisma.TamanhoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TamanhoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TamanhoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TamanhoPayload>
          }
          findMany: {
            args: Prisma.TamanhoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TamanhoPayload>[]
          }
          create: {
            args: Prisma.TamanhoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TamanhoPayload>
          }
          createMany: {
            args: Prisma.TamanhoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TamanhoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TamanhoPayload>[]
          }
          delete: {
            args: Prisma.TamanhoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TamanhoPayload>
          }
          update: {
            args: Prisma.TamanhoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TamanhoPayload>
          }
          deleteMany: {
            args: Prisma.TamanhoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TamanhoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TamanhoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TamanhoPayload>[]
          }
          upsert: {
            args: Prisma.TamanhoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TamanhoPayload>
          }
          aggregate: {
            args: Prisma.TamanhoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTamanho>
          }
          groupBy: {
            args: Prisma.TamanhoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TamanhoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TamanhoCountArgs<ExtArgs>
            result: $Utils.Optional<TamanhoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    voluntario?: VoluntarioOmit
    beneficiario?: BeneficiarioOmit
    doacao?: DoacaoOmit
    itemDoacao?: ItemDoacaoOmit
    distribuicao?: DistribuicaoOmit
    itemDistribuicao?: ItemDistribuicaoOmit
    item?: ItemOmit
    tipo?: TipoOmit
    tamanho?: TamanhoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type VoluntarioCountOutputType
   */

  export type VoluntarioCountOutputType = {
    doacoes: number
    distribuicoes: number
  }

  export type VoluntarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doacoes?: boolean | VoluntarioCountOutputTypeCountDoacoesArgs
    distribuicoes?: boolean | VoluntarioCountOutputTypeCountDistribuicoesArgs
  }

  // Custom InputTypes
  /**
   * VoluntarioCountOutputType without action
   */
  export type VoluntarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoluntarioCountOutputType
     */
    select?: VoluntarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VoluntarioCountOutputType without action
   */
  export type VoluntarioCountOutputTypeCountDoacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoacaoWhereInput
  }

  /**
   * VoluntarioCountOutputType without action
   */
  export type VoluntarioCountOutputTypeCountDistribuicoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistribuicaoWhereInput
  }


  /**
   * Count Type BeneficiarioCountOutputType
   */

  export type BeneficiarioCountOutputType = {
    distribuicoes: number
  }

  export type BeneficiarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distribuicoes?: boolean | BeneficiarioCountOutputTypeCountDistribuicoesArgs
  }

  // Custom InputTypes
  /**
   * BeneficiarioCountOutputType without action
   */
  export type BeneficiarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeneficiarioCountOutputType
     */
    select?: BeneficiarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BeneficiarioCountOutputType without action
   */
  export type BeneficiarioCountOutputTypeCountDistribuicoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistribuicaoWhereInput
  }


  /**
   * Count Type DoacaoCountOutputType
   */

  export type DoacaoCountOutputType = {
    itens: number
  }

  export type DoacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | DoacaoCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * DoacaoCountOutputType without action
   */
  export type DoacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoacaoCountOutputType
     */
    select?: DoacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoacaoCountOutputType without action
   */
  export type DoacaoCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemDoacaoWhereInput
  }


  /**
   * Count Type DistribuicaoCountOutputType
   */

  export type DistribuicaoCountOutputType = {
    itens: number
  }

  export type DistribuicaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | DistribuicaoCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * DistribuicaoCountOutputType without action
   */
  export type DistribuicaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistribuicaoCountOutputType
     */
    select?: DistribuicaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DistribuicaoCountOutputType without action
   */
  export type DistribuicaoCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemDistribuicaoWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    entradas: number
    saidas: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entradas?: boolean | ItemCountOutputTypeCountEntradasArgs
    saidas?: boolean | ItemCountOutputTypeCountSaidasArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountEntradasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemDoacaoWhereInput
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountSaidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemDistribuicaoWhereInput
  }


  /**
   * Count Type TipoCountOutputType
   */

  export type TipoCountOutputType = {
    tamanhos: number
    itens: number
  }

  export type TipoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tamanhos?: boolean | TipoCountOutputTypeCountTamanhosArgs
    itens?: boolean | TipoCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * TipoCountOutputType without action
   */
  export type TipoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCountOutputType
     */
    select?: TipoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoCountOutputType without action
   */
  export type TipoCountOutputTypeCountTamanhosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TamanhoWhereInput
  }

  /**
   * TipoCountOutputType without action
   */
  export type TipoCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }


  /**
   * Count Type TamanhoCountOutputType
   */

  export type TamanhoCountOutputType = {
    itens: number
  }

  export type TamanhoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | TamanhoCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * TamanhoCountOutputType without action
   */
  export type TamanhoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TamanhoCountOutputType
     */
    select?: TamanhoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TamanhoCountOutputType without action
   */
  export type TamanhoCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Voluntario
   */

  export type AggregateVoluntario = {
    _count: VoluntarioCountAggregateOutputType | null
    _avg: VoluntarioAvgAggregateOutputType | null
    _sum: VoluntarioSumAggregateOutputType | null
    _min: VoluntarioMinAggregateOutputType | null
    _max: VoluntarioMaxAggregateOutputType | null
  }

  export type VoluntarioAvgAggregateOutputType = {
    id: number | null
  }

  export type VoluntarioSumAggregateOutputType = {
    id: number | null
  }

  export type VoluntarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    endereco: string | null
    telefone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VoluntarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    endereco: string | null
    telefone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VoluntarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    endereco: number
    telefone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VoluntarioAvgAggregateInputType = {
    id?: true
  }

  export type VoluntarioSumAggregateInputType = {
    id?: true
  }

  export type VoluntarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    endereco?: true
    telefone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VoluntarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    endereco?: true
    telefone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VoluntarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    endereco?: true
    telefone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VoluntarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Voluntario to aggregate.
     */
    where?: VoluntarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voluntarios to fetch.
     */
    orderBy?: VoluntarioOrderByWithRelationInput | VoluntarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoluntarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voluntarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voluntarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Voluntarios
    **/
    _count?: true | VoluntarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VoluntarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VoluntarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoluntarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoluntarioMaxAggregateInputType
  }

  export type GetVoluntarioAggregateType<T extends VoluntarioAggregateArgs> = {
        [P in keyof T & keyof AggregateVoluntario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoluntario[P]>
      : GetScalarType<T[P], AggregateVoluntario[P]>
  }




  export type VoluntarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoluntarioWhereInput
    orderBy?: VoluntarioOrderByWithAggregationInput | VoluntarioOrderByWithAggregationInput[]
    by: VoluntarioScalarFieldEnum[] | VoluntarioScalarFieldEnum
    having?: VoluntarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoluntarioCountAggregateInputType | true
    _avg?: VoluntarioAvgAggregateInputType
    _sum?: VoluntarioSumAggregateInputType
    _min?: VoluntarioMinAggregateInputType
    _max?: VoluntarioMaxAggregateInputType
  }

  export type VoluntarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    endereco: string | null
    telefone: string | null
    createdAt: Date
    updatedAt: Date
    _count: VoluntarioCountAggregateOutputType | null
    _avg: VoluntarioAvgAggregateOutputType | null
    _sum: VoluntarioSumAggregateOutputType | null
    _min: VoluntarioMinAggregateOutputType | null
    _max: VoluntarioMaxAggregateOutputType | null
  }

  type GetVoluntarioGroupByPayload<T extends VoluntarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoluntarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoluntarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoluntarioGroupByOutputType[P]>
            : GetScalarType<T[P], VoluntarioGroupByOutputType[P]>
        }
      >
    >


  export type VoluntarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    endereco?: boolean
    telefone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doacoes?: boolean | Voluntario$doacoesArgs<ExtArgs>
    distribuicoes?: boolean | Voluntario$distribuicoesArgs<ExtArgs>
    _count?: boolean | VoluntarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voluntario"]>

  export type VoluntarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    endereco?: boolean
    telefone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["voluntario"]>

  export type VoluntarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    endereco?: boolean
    telefone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["voluntario"]>

  export type VoluntarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    endereco?: boolean
    telefone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VoluntarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "endereco" | "telefone" | "createdAt" | "updatedAt", ExtArgs["result"]["voluntario"]>
  export type VoluntarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doacoes?: boolean | Voluntario$doacoesArgs<ExtArgs>
    distribuicoes?: boolean | Voluntario$distribuicoesArgs<ExtArgs>
    _count?: boolean | VoluntarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VoluntarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VoluntarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VoluntarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Voluntario"
    objects: {
      doacoes: Prisma.$DoacaoPayload<ExtArgs>[]
      distribuicoes: Prisma.$DistribuicaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      endereco: string | null
      telefone: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["voluntario"]>
    composites: {}
  }

  type VoluntarioGetPayload<S extends boolean | null | undefined | VoluntarioDefaultArgs> = $Result.GetResult<Prisma.$VoluntarioPayload, S>

  type VoluntarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoluntarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoluntarioCountAggregateInputType | true
    }

  export interface VoluntarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Voluntario'], meta: { name: 'Voluntario' } }
    /**
     * Find zero or one Voluntario that matches the filter.
     * @param {VoluntarioFindUniqueArgs} args - Arguments to find a Voluntario
     * @example
     * // Get one Voluntario
     * const voluntario = await prisma.voluntario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoluntarioFindUniqueArgs>(args: SelectSubset<T, VoluntarioFindUniqueArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Voluntario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoluntarioFindUniqueOrThrowArgs} args - Arguments to find a Voluntario
     * @example
     * // Get one Voluntario
     * const voluntario = await prisma.voluntario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoluntarioFindUniqueOrThrowArgs>(args: SelectSubset<T, VoluntarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voluntario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoluntarioFindFirstArgs} args - Arguments to find a Voluntario
     * @example
     * // Get one Voluntario
     * const voluntario = await prisma.voluntario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoluntarioFindFirstArgs>(args?: SelectSubset<T, VoluntarioFindFirstArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voluntario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoluntarioFindFirstOrThrowArgs} args - Arguments to find a Voluntario
     * @example
     * // Get one Voluntario
     * const voluntario = await prisma.voluntario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoluntarioFindFirstOrThrowArgs>(args?: SelectSubset<T, VoluntarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Voluntarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoluntarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Voluntarios
     * const voluntarios = await prisma.voluntario.findMany()
     * 
     * // Get first 10 Voluntarios
     * const voluntarios = await prisma.voluntario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voluntarioWithIdOnly = await prisma.voluntario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoluntarioFindManyArgs>(args?: SelectSubset<T, VoluntarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Voluntario.
     * @param {VoluntarioCreateArgs} args - Arguments to create a Voluntario.
     * @example
     * // Create one Voluntario
     * const Voluntario = await prisma.voluntario.create({
     *   data: {
     *     // ... data to create a Voluntario
     *   }
     * })
     * 
     */
    create<T extends VoluntarioCreateArgs>(args: SelectSubset<T, VoluntarioCreateArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Voluntarios.
     * @param {VoluntarioCreateManyArgs} args - Arguments to create many Voluntarios.
     * @example
     * // Create many Voluntarios
     * const voluntario = await prisma.voluntario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoluntarioCreateManyArgs>(args?: SelectSubset<T, VoluntarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Voluntarios and returns the data saved in the database.
     * @param {VoluntarioCreateManyAndReturnArgs} args - Arguments to create many Voluntarios.
     * @example
     * // Create many Voluntarios
     * const voluntario = await prisma.voluntario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Voluntarios and only return the `id`
     * const voluntarioWithIdOnly = await prisma.voluntario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoluntarioCreateManyAndReturnArgs>(args?: SelectSubset<T, VoluntarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Voluntario.
     * @param {VoluntarioDeleteArgs} args - Arguments to delete one Voluntario.
     * @example
     * // Delete one Voluntario
     * const Voluntario = await prisma.voluntario.delete({
     *   where: {
     *     // ... filter to delete one Voluntario
     *   }
     * })
     * 
     */
    delete<T extends VoluntarioDeleteArgs>(args: SelectSubset<T, VoluntarioDeleteArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Voluntario.
     * @param {VoluntarioUpdateArgs} args - Arguments to update one Voluntario.
     * @example
     * // Update one Voluntario
     * const voluntario = await prisma.voluntario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoluntarioUpdateArgs>(args: SelectSubset<T, VoluntarioUpdateArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Voluntarios.
     * @param {VoluntarioDeleteManyArgs} args - Arguments to filter Voluntarios to delete.
     * @example
     * // Delete a few Voluntarios
     * const { count } = await prisma.voluntario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoluntarioDeleteManyArgs>(args?: SelectSubset<T, VoluntarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voluntarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoluntarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Voluntarios
     * const voluntario = await prisma.voluntario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoluntarioUpdateManyArgs>(args: SelectSubset<T, VoluntarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voluntarios and returns the data updated in the database.
     * @param {VoluntarioUpdateManyAndReturnArgs} args - Arguments to update many Voluntarios.
     * @example
     * // Update many Voluntarios
     * const voluntario = await prisma.voluntario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Voluntarios and only return the `id`
     * const voluntarioWithIdOnly = await prisma.voluntario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VoluntarioUpdateManyAndReturnArgs>(args: SelectSubset<T, VoluntarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Voluntario.
     * @param {VoluntarioUpsertArgs} args - Arguments to update or create a Voluntario.
     * @example
     * // Update or create a Voluntario
     * const voluntario = await prisma.voluntario.upsert({
     *   create: {
     *     // ... data to create a Voluntario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voluntario we want to update
     *   }
     * })
     */
    upsert<T extends VoluntarioUpsertArgs>(args: SelectSubset<T, VoluntarioUpsertArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Voluntarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoluntarioCountArgs} args - Arguments to filter Voluntarios to count.
     * @example
     * // Count the number of Voluntarios
     * const count = await prisma.voluntario.count({
     *   where: {
     *     // ... the filter for the Voluntarios we want to count
     *   }
     * })
    **/
    count<T extends VoluntarioCountArgs>(
      args?: Subset<T, VoluntarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoluntarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voluntario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoluntarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VoluntarioAggregateArgs>(args: Subset<T, VoluntarioAggregateArgs>): Prisma.PrismaPromise<GetVoluntarioAggregateType<T>>

    /**
     * Group by Voluntario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoluntarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VoluntarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoluntarioGroupByArgs['orderBy'] }
        : { orderBy?: VoluntarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VoluntarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoluntarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Voluntario model
   */
  readonly fields: VoluntarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Voluntario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoluntarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doacoes<T extends Voluntario$doacoesArgs<ExtArgs> = {}>(args?: Subset<T, Voluntario$doacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    distribuicoes<T extends Voluntario$distribuicoesArgs<ExtArgs> = {}>(args?: Subset<T, Voluntario$distribuicoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistribuicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Voluntario model
   */
  interface VoluntarioFieldRefs {
    readonly id: FieldRef<"Voluntario", 'Int'>
    readonly nome: FieldRef<"Voluntario", 'String'>
    readonly email: FieldRef<"Voluntario", 'String'>
    readonly senha: FieldRef<"Voluntario", 'String'>
    readonly endereco: FieldRef<"Voluntario", 'String'>
    readonly telefone: FieldRef<"Voluntario", 'String'>
    readonly createdAt: FieldRef<"Voluntario", 'DateTime'>
    readonly updatedAt: FieldRef<"Voluntario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Voluntario findUnique
   */
  export type VoluntarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voluntario
     */
    omit?: VoluntarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoluntarioInclude<ExtArgs> | null
    /**
     * Filter, which Voluntario to fetch.
     */
    where: VoluntarioWhereUniqueInput
  }

  /**
   * Voluntario findUniqueOrThrow
   */
  export type VoluntarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voluntario
     */
    omit?: VoluntarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoluntarioInclude<ExtArgs> | null
    /**
     * Filter, which Voluntario to fetch.
     */
    where: VoluntarioWhereUniqueInput
  }

  /**
   * Voluntario findFirst
   */
  export type VoluntarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voluntario
     */
    omit?: VoluntarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoluntarioInclude<ExtArgs> | null
    /**
     * Filter, which Voluntario to fetch.
     */
    where?: VoluntarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voluntarios to fetch.
     */
    orderBy?: VoluntarioOrderByWithRelationInput | VoluntarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Voluntarios.
     */
    cursor?: VoluntarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voluntarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voluntarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Voluntarios.
     */
    distinct?: VoluntarioScalarFieldEnum | VoluntarioScalarFieldEnum[]
  }

  /**
   * Voluntario findFirstOrThrow
   */
  export type VoluntarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voluntario
     */
    omit?: VoluntarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoluntarioInclude<ExtArgs> | null
    /**
     * Filter, which Voluntario to fetch.
     */
    where?: VoluntarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voluntarios to fetch.
     */
    orderBy?: VoluntarioOrderByWithRelationInput | VoluntarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Voluntarios.
     */
    cursor?: VoluntarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voluntarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voluntarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Voluntarios.
     */
    distinct?: VoluntarioScalarFieldEnum | VoluntarioScalarFieldEnum[]
  }

  /**
   * Voluntario findMany
   */
  export type VoluntarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voluntario
     */
    omit?: VoluntarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoluntarioInclude<ExtArgs> | null
    /**
     * Filter, which Voluntarios to fetch.
     */
    where?: VoluntarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voluntarios to fetch.
     */
    orderBy?: VoluntarioOrderByWithRelationInput | VoluntarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Voluntarios.
     */
    cursor?: VoluntarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voluntarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voluntarios.
     */
    skip?: number
    distinct?: VoluntarioScalarFieldEnum | VoluntarioScalarFieldEnum[]
  }

  /**
   * Voluntario create
   */
  export type VoluntarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voluntario
     */
    omit?: VoluntarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoluntarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Voluntario.
     */
    data: XOR<VoluntarioCreateInput, VoluntarioUncheckedCreateInput>
  }

  /**
   * Voluntario createMany
   */
  export type VoluntarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Voluntarios.
     */
    data: VoluntarioCreateManyInput | VoluntarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Voluntario createManyAndReturn
   */
  export type VoluntarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voluntario
     */
    omit?: VoluntarioOmit<ExtArgs> | null
    /**
     * The data used to create many Voluntarios.
     */
    data: VoluntarioCreateManyInput | VoluntarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Voluntario update
   */
  export type VoluntarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voluntario
     */
    omit?: VoluntarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoluntarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Voluntario.
     */
    data: XOR<VoluntarioUpdateInput, VoluntarioUncheckedUpdateInput>
    /**
     * Choose, which Voluntario to update.
     */
    where: VoluntarioWhereUniqueInput
  }

  /**
   * Voluntario updateMany
   */
  export type VoluntarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Voluntarios.
     */
    data: XOR<VoluntarioUpdateManyMutationInput, VoluntarioUncheckedUpdateManyInput>
    /**
     * Filter which Voluntarios to update
     */
    where?: VoluntarioWhereInput
    /**
     * Limit how many Voluntarios to update.
     */
    limit?: number
  }

  /**
   * Voluntario updateManyAndReturn
   */
  export type VoluntarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voluntario
     */
    omit?: VoluntarioOmit<ExtArgs> | null
    /**
     * The data used to update Voluntarios.
     */
    data: XOR<VoluntarioUpdateManyMutationInput, VoluntarioUncheckedUpdateManyInput>
    /**
     * Filter which Voluntarios to update
     */
    where?: VoluntarioWhereInput
    /**
     * Limit how many Voluntarios to update.
     */
    limit?: number
  }

  /**
   * Voluntario upsert
   */
  export type VoluntarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voluntario
     */
    omit?: VoluntarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoluntarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Voluntario to update in case it exists.
     */
    where: VoluntarioWhereUniqueInput
    /**
     * In case the Voluntario found by the `where` argument doesn't exist, create a new Voluntario with this data.
     */
    create: XOR<VoluntarioCreateInput, VoluntarioUncheckedCreateInput>
    /**
     * In case the Voluntario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoluntarioUpdateInput, VoluntarioUncheckedUpdateInput>
  }

  /**
   * Voluntario delete
   */
  export type VoluntarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voluntario
     */
    omit?: VoluntarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoluntarioInclude<ExtArgs> | null
    /**
     * Filter which Voluntario to delete.
     */
    where: VoluntarioWhereUniqueInput
  }

  /**
   * Voluntario deleteMany
   */
  export type VoluntarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Voluntarios to delete
     */
    where?: VoluntarioWhereInput
    /**
     * Limit how many Voluntarios to delete.
     */
    limit?: number
  }

  /**
   * Voluntario.doacoes
   */
  export type Voluntario$doacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    where?: DoacaoWhereInput
    orderBy?: DoacaoOrderByWithRelationInput | DoacaoOrderByWithRelationInput[]
    cursor?: DoacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoacaoScalarFieldEnum | DoacaoScalarFieldEnum[]
  }

  /**
   * Voluntario.distribuicoes
   */
  export type Voluntario$distribuicoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuicao
     */
    select?: DistribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribuicao
     */
    omit?: DistribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistribuicaoInclude<ExtArgs> | null
    where?: DistribuicaoWhereInput
    orderBy?: DistribuicaoOrderByWithRelationInput | DistribuicaoOrderByWithRelationInput[]
    cursor?: DistribuicaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DistribuicaoScalarFieldEnum | DistribuicaoScalarFieldEnum[]
  }

  /**
   * Voluntario without action
   */
  export type VoluntarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voluntario
     */
    omit?: VoluntarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoluntarioInclude<ExtArgs> | null
  }


  /**
   * Model Beneficiario
   */

  export type AggregateBeneficiario = {
    _count: BeneficiarioCountAggregateOutputType | null
    _avg: BeneficiarioAvgAggregateOutputType | null
    _sum: BeneficiarioSumAggregateOutputType | null
    _min: BeneficiarioMinAggregateOutputType | null
    _max: BeneficiarioMaxAggregateOutputType | null
  }

  export type BeneficiarioAvgAggregateOutputType = {
    id: number | null
  }

  export type BeneficiarioSumAggregateOutputType = {
    id: number | null
  }

  export type BeneficiarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    cpf: string | null
    telefone: string | null
    endereco: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BeneficiarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    cpf: string | null
    telefone: string | null
    endereco: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BeneficiarioCountAggregateOutputType = {
    id: number
    nome: number
    cpf: number
    telefone: number
    endereco: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BeneficiarioAvgAggregateInputType = {
    id?: true
  }

  export type BeneficiarioSumAggregateInputType = {
    id?: true
  }

  export type BeneficiarioMinAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    telefone?: true
    endereco?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BeneficiarioMaxAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    telefone?: true
    endereco?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BeneficiarioCountAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    telefone?: true
    endereco?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BeneficiarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Beneficiario to aggregate.
     */
    where?: BeneficiarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beneficiarios to fetch.
     */
    orderBy?: BeneficiarioOrderByWithRelationInput | BeneficiarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BeneficiarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beneficiarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beneficiarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Beneficiarios
    **/
    _count?: true | BeneficiarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BeneficiarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BeneficiarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BeneficiarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BeneficiarioMaxAggregateInputType
  }

  export type GetBeneficiarioAggregateType<T extends BeneficiarioAggregateArgs> = {
        [P in keyof T & keyof AggregateBeneficiario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBeneficiario[P]>
      : GetScalarType<T[P], AggregateBeneficiario[P]>
  }




  export type BeneficiarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BeneficiarioWhereInput
    orderBy?: BeneficiarioOrderByWithAggregationInput | BeneficiarioOrderByWithAggregationInput[]
    by: BeneficiarioScalarFieldEnum[] | BeneficiarioScalarFieldEnum
    having?: BeneficiarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BeneficiarioCountAggregateInputType | true
    _avg?: BeneficiarioAvgAggregateInputType
    _sum?: BeneficiarioSumAggregateInputType
    _min?: BeneficiarioMinAggregateInputType
    _max?: BeneficiarioMaxAggregateInputType
  }

  export type BeneficiarioGroupByOutputType = {
    id: number
    nome: string
    cpf: string
    telefone: string | null
    endereco: string | null
    createdAt: Date
    updatedAt: Date
    _count: BeneficiarioCountAggregateOutputType | null
    _avg: BeneficiarioAvgAggregateOutputType | null
    _sum: BeneficiarioSumAggregateOutputType | null
    _min: BeneficiarioMinAggregateOutputType | null
    _max: BeneficiarioMaxAggregateOutputType | null
  }

  type GetBeneficiarioGroupByPayload<T extends BeneficiarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BeneficiarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BeneficiarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BeneficiarioGroupByOutputType[P]>
            : GetScalarType<T[P], BeneficiarioGroupByOutputType[P]>
        }
      >
    >


  export type BeneficiarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    telefone?: boolean
    endereco?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    distribuicoes?: boolean | Beneficiario$distribuicoesArgs<ExtArgs>
    _count?: boolean | BeneficiarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["beneficiario"]>

  export type BeneficiarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    telefone?: boolean
    endereco?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["beneficiario"]>

  export type BeneficiarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    telefone?: boolean
    endereco?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["beneficiario"]>

  export type BeneficiarioSelectScalar = {
    id?: boolean
    nome?: boolean
    cpf?: boolean
    telefone?: boolean
    endereco?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BeneficiarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cpf" | "telefone" | "endereco" | "createdAt" | "updatedAt", ExtArgs["result"]["beneficiario"]>
  export type BeneficiarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distribuicoes?: boolean | Beneficiario$distribuicoesArgs<ExtArgs>
    _count?: boolean | BeneficiarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BeneficiarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BeneficiarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BeneficiarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Beneficiario"
    objects: {
      distribuicoes: Prisma.$DistribuicaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      cpf: string
      telefone: string | null
      endereco: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["beneficiario"]>
    composites: {}
  }

  type BeneficiarioGetPayload<S extends boolean | null | undefined | BeneficiarioDefaultArgs> = $Result.GetResult<Prisma.$BeneficiarioPayload, S>

  type BeneficiarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BeneficiarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BeneficiarioCountAggregateInputType | true
    }

  export interface BeneficiarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Beneficiario'], meta: { name: 'Beneficiario' } }
    /**
     * Find zero or one Beneficiario that matches the filter.
     * @param {BeneficiarioFindUniqueArgs} args - Arguments to find a Beneficiario
     * @example
     * // Get one Beneficiario
     * const beneficiario = await prisma.beneficiario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BeneficiarioFindUniqueArgs>(args: SelectSubset<T, BeneficiarioFindUniqueArgs<ExtArgs>>): Prisma__BeneficiarioClient<$Result.GetResult<Prisma.$BeneficiarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Beneficiario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BeneficiarioFindUniqueOrThrowArgs} args - Arguments to find a Beneficiario
     * @example
     * // Get one Beneficiario
     * const beneficiario = await prisma.beneficiario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BeneficiarioFindUniqueOrThrowArgs>(args: SelectSubset<T, BeneficiarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BeneficiarioClient<$Result.GetResult<Prisma.$BeneficiarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Beneficiario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiarioFindFirstArgs} args - Arguments to find a Beneficiario
     * @example
     * // Get one Beneficiario
     * const beneficiario = await prisma.beneficiario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BeneficiarioFindFirstArgs>(args?: SelectSubset<T, BeneficiarioFindFirstArgs<ExtArgs>>): Prisma__BeneficiarioClient<$Result.GetResult<Prisma.$BeneficiarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Beneficiario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiarioFindFirstOrThrowArgs} args - Arguments to find a Beneficiario
     * @example
     * // Get one Beneficiario
     * const beneficiario = await prisma.beneficiario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BeneficiarioFindFirstOrThrowArgs>(args?: SelectSubset<T, BeneficiarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__BeneficiarioClient<$Result.GetResult<Prisma.$BeneficiarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Beneficiarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Beneficiarios
     * const beneficiarios = await prisma.beneficiario.findMany()
     * 
     * // Get first 10 Beneficiarios
     * const beneficiarios = await prisma.beneficiario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const beneficiarioWithIdOnly = await prisma.beneficiario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BeneficiarioFindManyArgs>(args?: SelectSubset<T, BeneficiarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeneficiarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Beneficiario.
     * @param {BeneficiarioCreateArgs} args - Arguments to create a Beneficiario.
     * @example
     * // Create one Beneficiario
     * const Beneficiario = await prisma.beneficiario.create({
     *   data: {
     *     // ... data to create a Beneficiario
     *   }
     * })
     * 
     */
    create<T extends BeneficiarioCreateArgs>(args: SelectSubset<T, BeneficiarioCreateArgs<ExtArgs>>): Prisma__BeneficiarioClient<$Result.GetResult<Prisma.$BeneficiarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Beneficiarios.
     * @param {BeneficiarioCreateManyArgs} args - Arguments to create many Beneficiarios.
     * @example
     * // Create many Beneficiarios
     * const beneficiario = await prisma.beneficiario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BeneficiarioCreateManyArgs>(args?: SelectSubset<T, BeneficiarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Beneficiarios and returns the data saved in the database.
     * @param {BeneficiarioCreateManyAndReturnArgs} args - Arguments to create many Beneficiarios.
     * @example
     * // Create many Beneficiarios
     * const beneficiario = await prisma.beneficiario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Beneficiarios and only return the `id`
     * const beneficiarioWithIdOnly = await prisma.beneficiario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BeneficiarioCreateManyAndReturnArgs>(args?: SelectSubset<T, BeneficiarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeneficiarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Beneficiario.
     * @param {BeneficiarioDeleteArgs} args - Arguments to delete one Beneficiario.
     * @example
     * // Delete one Beneficiario
     * const Beneficiario = await prisma.beneficiario.delete({
     *   where: {
     *     // ... filter to delete one Beneficiario
     *   }
     * })
     * 
     */
    delete<T extends BeneficiarioDeleteArgs>(args: SelectSubset<T, BeneficiarioDeleteArgs<ExtArgs>>): Prisma__BeneficiarioClient<$Result.GetResult<Prisma.$BeneficiarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Beneficiario.
     * @param {BeneficiarioUpdateArgs} args - Arguments to update one Beneficiario.
     * @example
     * // Update one Beneficiario
     * const beneficiario = await prisma.beneficiario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BeneficiarioUpdateArgs>(args: SelectSubset<T, BeneficiarioUpdateArgs<ExtArgs>>): Prisma__BeneficiarioClient<$Result.GetResult<Prisma.$BeneficiarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Beneficiarios.
     * @param {BeneficiarioDeleteManyArgs} args - Arguments to filter Beneficiarios to delete.
     * @example
     * // Delete a few Beneficiarios
     * const { count } = await prisma.beneficiario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BeneficiarioDeleteManyArgs>(args?: SelectSubset<T, BeneficiarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Beneficiarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Beneficiarios
     * const beneficiario = await prisma.beneficiario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BeneficiarioUpdateManyArgs>(args: SelectSubset<T, BeneficiarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Beneficiarios and returns the data updated in the database.
     * @param {BeneficiarioUpdateManyAndReturnArgs} args - Arguments to update many Beneficiarios.
     * @example
     * // Update many Beneficiarios
     * const beneficiario = await prisma.beneficiario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Beneficiarios and only return the `id`
     * const beneficiarioWithIdOnly = await prisma.beneficiario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BeneficiarioUpdateManyAndReturnArgs>(args: SelectSubset<T, BeneficiarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeneficiarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Beneficiario.
     * @param {BeneficiarioUpsertArgs} args - Arguments to update or create a Beneficiario.
     * @example
     * // Update or create a Beneficiario
     * const beneficiario = await prisma.beneficiario.upsert({
     *   create: {
     *     // ... data to create a Beneficiario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Beneficiario we want to update
     *   }
     * })
     */
    upsert<T extends BeneficiarioUpsertArgs>(args: SelectSubset<T, BeneficiarioUpsertArgs<ExtArgs>>): Prisma__BeneficiarioClient<$Result.GetResult<Prisma.$BeneficiarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Beneficiarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiarioCountArgs} args - Arguments to filter Beneficiarios to count.
     * @example
     * // Count the number of Beneficiarios
     * const count = await prisma.beneficiario.count({
     *   where: {
     *     // ... the filter for the Beneficiarios we want to count
     *   }
     * })
    **/
    count<T extends BeneficiarioCountArgs>(
      args?: Subset<T, BeneficiarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BeneficiarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Beneficiario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BeneficiarioAggregateArgs>(args: Subset<T, BeneficiarioAggregateArgs>): Prisma.PrismaPromise<GetBeneficiarioAggregateType<T>>

    /**
     * Group by Beneficiario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BeneficiarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BeneficiarioGroupByArgs['orderBy'] }
        : { orderBy?: BeneficiarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BeneficiarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBeneficiarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Beneficiario model
   */
  readonly fields: BeneficiarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Beneficiario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BeneficiarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    distribuicoes<T extends Beneficiario$distribuicoesArgs<ExtArgs> = {}>(args?: Subset<T, Beneficiario$distribuicoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistribuicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Beneficiario model
   */
  interface BeneficiarioFieldRefs {
    readonly id: FieldRef<"Beneficiario", 'Int'>
    readonly nome: FieldRef<"Beneficiario", 'String'>
    readonly cpf: FieldRef<"Beneficiario", 'String'>
    readonly telefone: FieldRef<"Beneficiario", 'String'>
    readonly endereco: FieldRef<"Beneficiario", 'String'>
    readonly createdAt: FieldRef<"Beneficiario", 'DateTime'>
    readonly updatedAt: FieldRef<"Beneficiario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Beneficiario findUnique
   */
  export type BeneficiarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiario
     */
    select?: BeneficiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiario
     */
    omit?: BeneficiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiarioInclude<ExtArgs> | null
    /**
     * Filter, which Beneficiario to fetch.
     */
    where: BeneficiarioWhereUniqueInput
  }

  /**
   * Beneficiario findUniqueOrThrow
   */
  export type BeneficiarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiario
     */
    select?: BeneficiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiario
     */
    omit?: BeneficiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiarioInclude<ExtArgs> | null
    /**
     * Filter, which Beneficiario to fetch.
     */
    where: BeneficiarioWhereUniqueInput
  }

  /**
   * Beneficiario findFirst
   */
  export type BeneficiarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiario
     */
    select?: BeneficiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiario
     */
    omit?: BeneficiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiarioInclude<ExtArgs> | null
    /**
     * Filter, which Beneficiario to fetch.
     */
    where?: BeneficiarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beneficiarios to fetch.
     */
    orderBy?: BeneficiarioOrderByWithRelationInput | BeneficiarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Beneficiarios.
     */
    cursor?: BeneficiarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beneficiarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beneficiarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beneficiarios.
     */
    distinct?: BeneficiarioScalarFieldEnum | BeneficiarioScalarFieldEnum[]
  }

  /**
   * Beneficiario findFirstOrThrow
   */
  export type BeneficiarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiario
     */
    select?: BeneficiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiario
     */
    omit?: BeneficiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiarioInclude<ExtArgs> | null
    /**
     * Filter, which Beneficiario to fetch.
     */
    where?: BeneficiarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beneficiarios to fetch.
     */
    orderBy?: BeneficiarioOrderByWithRelationInput | BeneficiarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Beneficiarios.
     */
    cursor?: BeneficiarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beneficiarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beneficiarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beneficiarios.
     */
    distinct?: BeneficiarioScalarFieldEnum | BeneficiarioScalarFieldEnum[]
  }

  /**
   * Beneficiario findMany
   */
  export type BeneficiarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiario
     */
    select?: BeneficiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiario
     */
    omit?: BeneficiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiarioInclude<ExtArgs> | null
    /**
     * Filter, which Beneficiarios to fetch.
     */
    where?: BeneficiarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beneficiarios to fetch.
     */
    orderBy?: BeneficiarioOrderByWithRelationInput | BeneficiarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Beneficiarios.
     */
    cursor?: BeneficiarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beneficiarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beneficiarios.
     */
    skip?: number
    distinct?: BeneficiarioScalarFieldEnum | BeneficiarioScalarFieldEnum[]
  }

  /**
   * Beneficiario create
   */
  export type BeneficiarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiario
     */
    select?: BeneficiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiario
     */
    omit?: BeneficiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Beneficiario.
     */
    data: XOR<BeneficiarioCreateInput, BeneficiarioUncheckedCreateInput>
  }

  /**
   * Beneficiario createMany
   */
  export type BeneficiarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Beneficiarios.
     */
    data: BeneficiarioCreateManyInput | BeneficiarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Beneficiario createManyAndReturn
   */
  export type BeneficiarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiario
     */
    select?: BeneficiarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiario
     */
    omit?: BeneficiarioOmit<ExtArgs> | null
    /**
     * The data used to create many Beneficiarios.
     */
    data: BeneficiarioCreateManyInput | BeneficiarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Beneficiario update
   */
  export type BeneficiarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiario
     */
    select?: BeneficiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiario
     */
    omit?: BeneficiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Beneficiario.
     */
    data: XOR<BeneficiarioUpdateInput, BeneficiarioUncheckedUpdateInput>
    /**
     * Choose, which Beneficiario to update.
     */
    where: BeneficiarioWhereUniqueInput
  }

  /**
   * Beneficiario updateMany
   */
  export type BeneficiarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Beneficiarios.
     */
    data: XOR<BeneficiarioUpdateManyMutationInput, BeneficiarioUncheckedUpdateManyInput>
    /**
     * Filter which Beneficiarios to update
     */
    where?: BeneficiarioWhereInput
    /**
     * Limit how many Beneficiarios to update.
     */
    limit?: number
  }

  /**
   * Beneficiario updateManyAndReturn
   */
  export type BeneficiarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiario
     */
    select?: BeneficiarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiario
     */
    omit?: BeneficiarioOmit<ExtArgs> | null
    /**
     * The data used to update Beneficiarios.
     */
    data: XOR<BeneficiarioUpdateManyMutationInput, BeneficiarioUncheckedUpdateManyInput>
    /**
     * Filter which Beneficiarios to update
     */
    where?: BeneficiarioWhereInput
    /**
     * Limit how many Beneficiarios to update.
     */
    limit?: number
  }

  /**
   * Beneficiario upsert
   */
  export type BeneficiarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiario
     */
    select?: BeneficiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiario
     */
    omit?: BeneficiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Beneficiario to update in case it exists.
     */
    where: BeneficiarioWhereUniqueInput
    /**
     * In case the Beneficiario found by the `where` argument doesn't exist, create a new Beneficiario with this data.
     */
    create: XOR<BeneficiarioCreateInput, BeneficiarioUncheckedCreateInput>
    /**
     * In case the Beneficiario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BeneficiarioUpdateInput, BeneficiarioUncheckedUpdateInput>
  }

  /**
   * Beneficiario delete
   */
  export type BeneficiarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiario
     */
    select?: BeneficiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiario
     */
    omit?: BeneficiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiarioInclude<ExtArgs> | null
    /**
     * Filter which Beneficiario to delete.
     */
    where: BeneficiarioWhereUniqueInput
  }

  /**
   * Beneficiario deleteMany
   */
  export type BeneficiarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Beneficiarios to delete
     */
    where?: BeneficiarioWhereInput
    /**
     * Limit how many Beneficiarios to delete.
     */
    limit?: number
  }

  /**
   * Beneficiario.distribuicoes
   */
  export type Beneficiario$distribuicoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuicao
     */
    select?: DistribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribuicao
     */
    omit?: DistribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistribuicaoInclude<ExtArgs> | null
    where?: DistribuicaoWhereInput
    orderBy?: DistribuicaoOrderByWithRelationInput | DistribuicaoOrderByWithRelationInput[]
    cursor?: DistribuicaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DistribuicaoScalarFieldEnum | DistribuicaoScalarFieldEnum[]
  }

  /**
   * Beneficiario without action
   */
  export type BeneficiarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiario
     */
    select?: BeneficiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiario
     */
    omit?: BeneficiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiarioInclude<ExtArgs> | null
  }


  /**
   * Model Doacao
   */

  export type AggregateDoacao = {
    _count: DoacaoCountAggregateOutputType | null
    _avg: DoacaoAvgAggregateOutputType | null
    _sum: DoacaoSumAggregateOutputType | null
    _min: DoacaoMinAggregateOutputType | null
    _max: DoacaoMaxAggregateOutputType | null
  }

  export type DoacaoAvgAggregateOutputType = {
    id: number | null
    voluntarioId: number | null
  }

  export type DoacaoSumAggregateOutputType = {
    id: number | null
    voluntarioId: number | null
  }

  export type DoacaoMinAggregateOutputType = {
    id: number | null
    data: Date | null
    voluntarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoacaoMaxAggregateOutputType = {
    id: number | null
    data: Date | null
    voluntarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoacaoCountAggregateOutputType = {
    id: number
    data: number
    voluntarioId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DoacaoAvgAggregateInputType = {
    id?: true
    voluntarioId?: true
  }

  export type DoacaoSumAggregateInputType = {
    id?: true
    voluntarioId?: true
  }

  export type DoacaoMinAggregateInputType = {
    id?: true
    data?: true
    voluntarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoacaoMaxAggregateInputType = {
    id?: true
    data?: true
    voluntarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoacaoCountAggregateInputType = {
    id?: true
    data?: true
    voluntarioId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DoacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doacao to aggregate.
     */
    where?: DoacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doacaos to fetch.
     */
    orderBy?: DoacaoOrderByWithRelationInput | DoacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doacaos
    **/
    _count?: true | DoacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoacaoMaxAggregateInputType
  }

  export type GetDoacaoAggregateType<T extends DoacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateDoacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoacao[P]>
      : GetScalarType<T[P], AggregateDoacao[P]>
  }




  export type DoacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoacaoWhereInput
    orderBy?: DoacaoOrderByWithAggregationInput | DoacaoOrderByWithAggregationInput[]
    by: DoacaoScalarFieldEnum[] | DoacaoScalarFieldEnum
    having?: DoacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoacaoCountAggregateInputType | true
    _avg?: DoacaoAvgAggregateInputType
    _sum?: DoacaoSumAggregateInputType
    _min?: DoacaoMinAggregateInputType
    _max?: DoacaoMaxAggregateInputType
  }

  export type DoacaoGroupByOutputType = {
    id: number
    data: Date
    voluntarioId: number
    createdAt: Date
    updatedAt: Date
    _count: DoacaoCountAggregateOutputType | null
    _avg: DoacaoAvgAggregateOutputType | null
    _sum: DoacaoSumAggregateOutputType | null
    _min: DoacaoMinAggregateOutputType | null
    _max: DoacaoMaxAggregateOutputType | null
  }

  type GetDoacaoGroupByPayload<T extends DoacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoacaoGroupByOutputType[P]>
            : GetScalarType<T[P], DoacaoGroupByOutputType[P]>
        }
      >
    >


  export type DoacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    voluntarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    voluntario?: boolean | VoluntarioDefaultArgs<ExtArgs>
    itens?: boolean | Doacao$itensArgs<ExtArgs>
    _count?: boolean | DoacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doacao"]>

  export type DoacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    voluntarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    voluntario?: boolean | VoluntarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doacao"]>

  export type DoacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    voluntarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    voluntario?: boolean | VoluntarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doacao"]>

  export type DoacaoSelectScalar = {
    id?: boolean
    data?: boolean
    voluntarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DoacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "voluntarioId" | "createdAt" | "updatedAt", ExtArgs["result"]["doacao"]>
  export type DoacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voluntario?: boolean | VoluntarioDefaultArgs<ExtArgs>
    itens?: boolean | Doacao$itensArgs<ExtArgs>
    _count?: boolean | DoacaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voluntario?: boolean | VoluntarioDefaultArgs<ExtArgs>
  }
  export type DoacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voluntario?: boolean | VoluntarioDefaultArgs<ExtArgs>
  }

  export type $DoacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doacao"
    objects: {
      voluntario: Prisma.$VoluntarioPayload<ExtArgs>
      itens: Prisma.$ItemDoacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: Date
      voluntarioId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["doacao"]>
    composites: {}
  }

  type DoacaoGetPayload<S extends boolean | null | undefined | DoacaoDefaultArgs> = $Result.GetResult<Prisma.$DoacaoPayload, S>

  type DoacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoacaoCountAggregateInputType | true
    }

  export interface DoacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doacao'], meta: { name: 'Doacao' } }
    /**
     * Find zero or one Doacao that matches the filter.
     * @param {DoacaoFindUniqueArgs} args - Arguments to find a Doacao
     * @example
     * // Get one Doacao
     * const doacao = await prisma.doacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoacaoFindUniqueArgs>(args: SelectSubset<T, DoacaoFindUniqueArgs<ExtArgs>>): Prisma__DoacaoClient<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoacaoFindUniqueOrThrowArgs} args - Arguments to find a Doacao
     * @example
     * // Get one Doacao
     * const doacao = await prisma.doacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, DoacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoacaoClient<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoacaoFindFirstArgs} args - Arguments to find a Doacao
     * @example
     * // Get one Doacao
     * const doacao = await prisma.doacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoacaoFindFirstArgs>(args?: SelectSubset<T, DoacaoFindFirstArgs<ExtArgs>>): Prisma__DoacaoClient<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoacaoFindFirstOrThrowArgs} args - Arguments to find a Doacao
     * @example
     * // Get one Doacao
     * const doacao = await prisma.doacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, DoacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoacaoClient<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doacaos
     * const doacaos = await prisma.doacao.findMany()
     * 
     * // Get first 10 Doacaos
     * const doacaos = await prisma.doacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doacaoWithIdOnly = await prisma.doacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoacaoFindManyArgs>(args?: SelectSubset<T, DoacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doacao.
     * @param {DoacaoCreateArgs} args - Arguments to create a Doacao.
     * @example
     * // Create one Doacao
     * const Doacao = await prisma.doacao.create({
     *   data: {
     *     // ... data to create a Doacao
     *   }
     * })
     * 
     */
    create<T extends DoacaoCreateArgs>(args: SelectSubset<T, DoacaoCreateArgs<ExtArgs>>): Prisma__DoacaoClient<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doacaos.
     * @param {DoacaoCreateManyArgs} args - Arguments to create many Doacaos.
     * @example
     * // Create many Doacaos
     * const doacao = await prisma.doacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoacaoCreateManyArgs>(args?: SelectSubset<T, DoacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doacaos and returns the data saved in the database.
     * @param {DoacaoCreateManyAndReturnArgs} args - Arguments to create many Doacaos.
     * @example
     * // Create many Doacaos
     * const doacao = await prisma.doacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doacaos and only return the `id`
     * const doacaoWithIdOnly = await prisma.doacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, DoacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doacao.
     * @param {DoacaoDeleteArgs} args - Arguments to delete one Doacao.
     * @example
     * // Delete one Doacao
     * const Doacao = await prisma.doacao.delete({
     *   where: {
     *     // ... filter to delete one Doacao
     *   }
     * })
     * 
     */
    delete<T extends DoacaoDeleteArgs>(args: SelectSubset<T, DoacaoDeleteArgs<ExtArgs>>): Prisma__DoacaoClient<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doacao.
     * @param {DoacaoUpdateArgs} args - Arguments to update one Doacao.
     * @example
     * // Update one Doacao
     * const doacao = await prisma.doacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoacaoUpdateArgs>(args: SelectSubset<T, DoacaoUpdateArgs<ExtArgs>>): Prisma__DoacaoClient<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doacaos.
     * @param {DoacaoDeleteManyArgs} args - Arguments to filter Doacaos to delete.
     * @example
     * // Delete a few Doacaos
     * const { count } = await prisma.doacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoacaoDeleteManyArgs>(args?: SelectSubset<T, DoacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doacaos
     * const doacao = await prisma.doacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoacaoUpdateManyArgs>(args: SelectSubset<T, DoacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doacaos and returns the data updated in the database.
     * @param {DoacaoUpdateManyAndReturnArgs} args - Arguments to update many Doacaos.
     * @example
     * // Update many Doacaos
     * const doacao = await prisma.doacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doacaos and only return the `id`
     * const doacaoWithIdOnly = await prisma.doacao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, DoacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doacao.
     * @param {DoacaoUpsertArgs} args - Arguments to update or create a Doacao.
     * @example
     * // Update or create a Doacao
     * const doacao = await prisma.doacao.upsert({
     *   create: {
     *     // ... data to create a Doacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doacao we want to update
     *   }
     * })
     */
    upsert<T extends DoacaoUpsertArgs>(args: SelectSubset<T, DoacaoUpsertArgs<ExtArgs>>): Prisma__DoacaoClient<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoacaoCountArgs} args - Arguments to filter Doacaos to count.
     * @example
     * // Count the number of Doacaos
     * const count = await prisma.doacao.count({
     *   where: {
     *     // ... the filter for the Doacaos we want to count
     *   }
     * })
    **/
    count<T extends DoacaoCountArgs>(
      args?: Subset<T, DoacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoacaoAggregateArgs>(args: Subset<T, DoacaoAggregateArgs>): Prisma.PrismaPromise<GetDoacaoAggregateType<T>>

    /**
     * Group by Doacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoacaoGroupByArgs['orderBy'] }
        : { orderBy?: DoacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doacao model
   */
  readonly fields: DoacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    voluntario<T extends VoluntarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VoluntarioDefaultArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itens<T extends Doacao$itensArgs<ExtArgs> = {}>(args?: Subset<T, Doacao$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemDoacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Doacao model
   */
  interface DoacaoFieldRefs {
    readonly id: FieldRef<"Doacao", 'Int'>
    readonly data: FieldRef<"Doacao", 'DateTime'>
    readonly voluntarioId: FieldRef<"Doacao", 'Int'>
    readonly createdAt: FieldRef<"Doacao", 'DateTime'>
    readonly updatedAt: FieldRef<"Doacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Doacao findUnique
   */
  export type DoacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    /**
     * Filter, which Doacao to fetch.
     */
    where: DoacaoWhereUniqueInput
  }

  /**
   * Doacao findUniqueOrThrow
   */
  export type DoacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    /**
     * Filter, which Doacao to fetch.
     */
    where: DoacaoWhereUniqueInput
  }

  /**
   * Doacao findFirst
   */
  export type DoacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    /**
     * Filter, which Doacao to fetch.
     */
    where?: DoacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doacaos to fetch.
     */
    orderBy?: DoacaoOrderByWithRelationInput | DoacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doacaos.
     */
    cursor?: DoacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doacaos.
     */
    distinct?: DoacaoScalarFieldEnum | DoacaoScalarFieldEnum[]
  }

  /**
   * Doacao findFirstOrThrow
   */
  export type DoacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    /**
     * Filter, which Doacao to fetch.
     */
    where?: DoacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doacaos to fetch.
     */
    orderBy?: DoacaoOrderByWithRelationInput | DoacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doacaos.
     */
    cursor?: DoacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doacaos.
     */
    distinct?: DoacaoScalarFieldEnum | DoacaoScalarFieldEnum[]
  }

  /**
   * Doacao findMany
   */
  export type DoacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    /**
     * Filter, which Doacaos to fetch.
     */
    where?: DoacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doacaos to fetch.
     */
    orderBy?: DoacaoOrderByWithRelationInput | DoacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doacaos.
     */
    cursor?: DoacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doacaos.
     */
    skip?: number
    distinct?: DoacaoScalarFieldEnum | DoacaoScalarFieldEnum[]
  }

  /**
   * Doacao create
   */
  export type DoacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Doacao.
     */
    data: XOR<DoacaoCreateInput, DoacaoUncheckedCreateInput>
  }

  /**
   * Doacao createMany
   */
  export type DoacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doacaos.
     */
    data: DoacaoCreateManyInput | DoacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doacao createManyAndReturn
   */
  export type DoacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Doacaos.
     */
    data: DoacaoCreateManyInput | DoacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doacao update
   */
  export type DoacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Doacao.
     */
    data: XOR<DoacaoUpdateInput, DoacaoUncheckedUpdateInput>
    /**
     * Choose, which Doacao to update.
     */
    where: DoacaoWhereUniqueInput
  }

  /**
   * Doacao updateMany
   */
  export type DoacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doacaos.
     */
    data: XOR<DoacaoUpdateManyMutationInput, DoacaoUncheckedUpdateManyInput>
    /**
     * Filter which Doacaos to update
     */
    where?: DoacaoWhereInput
    /**
     * Limit how many Doacaos to update.
     */
    limit?: number
  }

  /**
   * Doacao updateManyAndReturn
   */
  export type DoacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * The data used to update Doacaos.
     */
    data: XOR<DoacaoUpdateManyMutationInput, DoacaoUncheckedUpdateManyInput>
    /**
     * Filter which Doacaos to update
     */
    where?: DoacaoWhereInput
    /**
     * Limit how many Doacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doacao upsert
   */
  export type DoacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Doacao to update in case it exists.
     */
    where: DoacaoWhereUniqueInput
    /**
     * In case the Doacao found by the `where` argument doesn't exist, create a new Doacao with this data.
     */
    create: XOR<DoacaoCreateInput, DoacaoUncheckedCreateInput>
    /**
     * In case the Doacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoacaoUpdateInput, DoacaoUncheckedUpdateInput>
  }

  /**
   * Doacao delete
   */
  export type DoacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
    /**
     * Filter which Doacao to delete.
     */
    where: DoacaoWhereUniqueInput
  }

  /**
   * Doacao deleteMany
   */
  export type DoacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doacaos to delete
     */
    where?: DoacaoWhereInput
    /**
     * Limit how many Doacaos to delete.
     */
    limit?: number
  }

  /**
   * Doacao.itens
   */
  export type Doacao$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDoacao
     */
    select?: ItemDoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDoacao
     */
    omit?: ItemDoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDoacaoInclude<ExtArgs> | null
    where?: ItemDoacaoWhereInput
    orderBy?: ItemDoacaoOrderByWithRelationInput | ItemDoacaoOrderByWithRelationInput[]
    cursor?: ItemDoacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemDoacaoScalarFieldEnum | ItemDoacaoScalarFieldEnum[]
  }

  /**
   * Doacao without action
   */
  export type DoacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doacao
     */
    select?: DoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doacao
     */
    omit?: DoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoacaoInclude<ExtArgs> | null
  }


  /**
   * Model ItemDoacao
   */

  export type AggregateItemDoacao = {
    _count: ItemDoacaoCountAggregateOutputType | null
    _avg: ItemDoacaoAvgAggregateOutputType | null
    _sum: ItemDoacaoSumAggregateOutputType | null
    _min: ItemDoacaoMinAggregateOutputType | null
    _max: ItemDoacaoMaxAggregateOutputType | null
  }

  export type ItemDoacaoAvgAggregateOutputType = {
    id: number | null
    quantidade: number | null
    doacaoId: number | null
    itemId: number | null
  }

  export type ItemDoacaoSumAggregateOutputType = {
    id: number | null
    quantidade: number | null
    doacaoId: number | null
    itemId: number | null
  }

  export type ItemDoacaoMinAggregateOutputType = {
    id: number | null
    quantidade: number | null
    doacaoId: number | null
    itemId: number | null
  }

  export type ItemDoacaoMaxAggregateOutputType = {
    id: number | null
    quantidade: number | null
    doacaoId: number | null
    itemId: number | null
  }

  export type ItemDoacaoCountAggregateOutputType = {
    id: number
    quantidade: number
    doacaoId: number
    itemId: number
    _all: number
  }


  export type ItemDoacaoAvgAggregateInputType = {
    id?: true
    quantidade?: true
    doacaoId?: true
    itemId?: true
  }

  export type ItemDoacaoSumAggregateInputType = {
    id?: true
    quantidade?: true
    doacaoId?: true
    itemId?: true
  }

  export type ItemDoacaoMinAggregateInputType = {
    id?: true
    quantidade?: true
    doacaoId?: true
    itemId?: true
  }

  export type ItemDoacaoMaxAggregateInputType = {
    id?: true
    quantidade?: true
    doacaoId?: true
    itemId?: true
  }

  export type ItemDoacaoCountAggregateInputType = {
    id?: true
    quantidade?: true
    doacaoId?: true
    itemId?: true
    _all?: true
  }

  export type ItemDoacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemDoacao to aggregate.
     */
    where?: ItemDoacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemDoacaos to fetch.
     */
    orderBy?: ItemDoacaoOrderByWithRelationInput | ItemDoacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemDoacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemDoacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemDoacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemDoacaos
    **/
    _count?: true | ItemDoacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemDoacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemDoacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemDoacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemDoacaoMaxAggregateInputType
  }

  export type GetItemDoacaoAggregateType<T extends ItemDoacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateItemDoacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemDoacao[P]>
      : GetScalarType<T[P], AggregateItemDoacao[P]>
  }




  export type ItemDoacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemDoacaoWhereInput
    orderBy?: ItemDoacaoOrderByWithAggregationInput | ItemDoacaoOrderByWithAggregationInput[]
    by: ItemDoacaoScalarFieldEnum[] | ItemDoacaoScalarFieldEnum
    having?: ItemDoacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemDoacaoCountAggregateInputType | true
    _avg?: ItemDoacaoAvgAggregateInputType
    _sum?: ItemDoacaoSumAggregateInputType
    _min?: ItemDoacaoMinAggregateInputType
    _max?: ItemDoacaoMaxAggregateInputType
  }

  export type ItemDoacaoGroupByOutputType = {
    id: number
    quantidade: number
    doacaoId: number
    itemId: number
    _count: ItemDoacaoCountAggregateOutputType | null
    _avg: ItemDoacaoAvgAggregateOutputType | null
    _sum: ItemDoacaoSumAggregateOutputType | null
    _min: ItemDoacaoMinAggregateOutputType | null
    _max: ItemDoacaoMaxAggregateOutputType | null
  }

  type GetItemDoacaoGroupByPayload<T extends ItemDoacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemDoacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemDoacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemDoacaoGroupByOutputType[P]>
            : GetScalarType<T[P], ItemDoacaoGroupByOutputType[P]>
        }
      >
    >


  export type ItemDoacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    doacaoId?: boolean
    itemId?: boolean
    doacao?: boolean | DoacaoDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemDoacao"]>

  export type ItemDoacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    doacaoId?: boolean
    itemId?: boolean
    doacao?: boolean | DoacaoDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemDoacao"]>

  export type ItemDoacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    doacaoId?: boolean
    itemId?: boolean
    doacao?: boolean | DoacaoDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemDoacao"]>

  export type ItemDoacaoSelectScalar = {
    id?: boolean
    quantidade?: boolean
    doacaoId?: boolean
    itemId?: boolean
  }

  export type ItemDoacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantidade" | "doacaoId" | "itemId", ExtArgs["result"]["itemDoacao"]>
  export type ItemDoacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doacao?: boolean | DoacaoDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type ItemDoacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doacao?: boolean | DoacaoDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type ItemDoacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doacao?: boolean | DoacaoDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $ItemDoacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemDoacao"
    objects: {
      doacao: Prisma.$DoacaoPayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantidade: number
      doacaoId: number
      itemId: number
    }, ExtArgs["result"]["itemDoacao"]>
    composites: {}
  }

  type ItemDoacaoGetPayload<S extends boolean | null | undefined | ItemDoacaoDefaultArgs> = $Result.GetResult<Prisma.$ItemDoacaoPayload, S>

  type ItemDoacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemDoacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemDoacaoCountAggregateInputType | true
    }

  export interface ItemDoacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemDoacao'], meta: { name: 'ItemDoacao' } }
    /**
     * Find zero or one ItemDoacao that matches the filter.
     * @param {ItemDoacaoFindUniqueArgs} args - Arguments to find a ItemDoacao
     * @example
     * // Get one ItemDoacao
     * const itemDoacao = await prisma.itemDoacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemDoacaoFindUniqueArgs>(args: SelectSubset<T, ItemDoacaoFindUniqueArgs<ExtArgs>>): Prisma__ItemDoacaoClient<$Result.GetResult<Prisma.$ItemDoacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemDoacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemDoacaoFindUniqueOrThrowArgs} args - Arguments to find a ItemDoacao
     * @example
     * // Get one ItemDoacao
     * const itemDoacao = await prisma.itemDoacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemDoacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemDoacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemDoacaoClient<$Result.GetResult<Prisma.$ItemDoacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemDoacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDoacaoFindFirstArgs} args - Arguments to find a ItemDoacao
     * @example
     * // Get one ItemDoacao
     * const itemDoacao = await prisma.itemDoacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemDoacaoFindFirstArgs>(args?: SelectSubset<T, ItemDoacaoFindFirstArgs<ExtArgs>>): Prisma__ItemDoacaoClient<$Result.GetResult<Prisma.$ItemDoacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemDoacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDoacaoFindFirstOrThrowArgs} args - Arguments to find a ItemDoacao
     * @example
     * // Get one ItemDoacao
     * const itemDoacao = await prisma.itemDoacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemDoacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemDoacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemDoacaoClient<$Result.GetResult<Prisma.$ItemDoacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemDoacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDoacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemDoacaos
     * const itemDoacaos = await prisma.itemDoacao.findMany()
     * 
     * // Get first 10 ItemDoacaos
     * const itemDoacaos = await prisma.itemDoacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemDoacaoWithIdOnly = await prisma.itemDoacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemDoacaoFindManyArgs>(args?: SelectSubset<T, ItemDoacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemDoacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemDoacao.
     * @param {ItemDoacaoCreateArgs} args - Arguments to create a ItemDoacao.
     * @example
     * // Create one ItemDoacao
     * const ItemDoacao = await prisma.itemDoacao.create({
     *   data: {
     *     // ... data to create a ItemDoacao
     *   }
     * })
     * 
     */
    create<T extends ItemDoacaoCreateArgs>(args: SelectSubset<T, ItemDoacaoCreateArgs<ExtArgs>>): Prisma__ItemDoacaoClient<$Result.GetResult<Prisma.$ItemDoacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemDoacaos.
     * @param {ItemDoacaoCreateManyArgs} args - Arguments to create many ItemDoacaos.
     * @example
     * // Create many ItemDoacaos
     * const itemDoacao = await prisma.itemDoacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemDoacaoCreateManyArgs>(args?: SelectSubset<T, ItemDoacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemDoacaos and returns the data saved in the database.
     * @param {ItemDoacaoCreateManyAndReturnArgs} args - Arguments to create many ItemDoacaos.
     * @example
     * // Create many ItemDoacaos
     * const itemDoacao = await prisma.itemDoacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemDoacaos and only return the `id`
     * const itemDoacaoWithIdOnly = await prisma.itemDoacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemDoacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemDoacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemDoacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemDoacao.
     * @param {ItemDoacaoDeleteArgs} args - Arguments to delete one ItemDoacao.
     * @example
     * // Delete one ItemDoacao
     * const ItemDoacao = await prisma.itemDoacao.delete({
     *   where: {
     *     // ... filter to delete one ItemDoacao
     *   }
     * })
     * 
     */
    delete<T extends ItemDoacaoDeleteArgs>(args: SelectSubset<T, ItemDoacaoDeleteArgs<ExtArgs>>): Prisma__ItemDoacaoClient<$Result.GetResult<Prisma.$ItemDoacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemDoacao.
     * @param {ItemDoacaoUpdateArgs} args - Arguments to update one ItemDoacao.
     * @example
     * // Update one ItemDoacao
     * const itemDoacao = await prisma.itemDoacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemDoacaoUpdateArgs>(args: SelectSubset<T, ItemDoacaoUpdateArgs<ExtArgs>>): Prisma__ItemDoacaoClient<$Result.GetResult<Prisma.$ItemDoacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemDoacaos.
     * @param {ItemDoacaoDeleteManyArgs} args - Arguments to filter ItemDoacaos to delete.
     * @example
     * // Delete a few ItemDoacaos
     * const { count } = await prisma.itemDoacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDoacaoDeleteManyArgs>(args?: SelectSubset<T, ItemDoacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemDoacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDoacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemDoacaos
     * const itemDoacao = await prisma.itemDoacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemDoacaoUpdateManyArgs>(args: SelectSubset<T, ItemDoacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemDoacaos and returns the data updated in the database.
     * @param {ItemDoacaoUpdateManyAndReturnArgs} args - Arguments to update many ItemDoacaos.
     * @example
     * // Update many ItemDoacaos
     * const itemDoacao = await prisma.itemDoacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemDoacaos and only return the `id`
     * const itemDoacaoWithIdOnly = await prisma.itemDoacao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemDoacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemDoacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemDoacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemDoacao.
     * @param {ItemDoacaoUpsertArgs} args - Arguments to update or create a ItemDoacao.
     * @example
     * // Update or create a ItemDoacao
     * const itemDoacao = await prisma.itemDoacao.upsert({
     *   create: {
     *     // ... data to create a ItemDoacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemDoacao we want to update
     *   }
     * })
     */
    upsert<T extends ItemDoacaoUpsertArgs>(args: SelectSubset<T, ItemDoacaoUpsertArgs<ExtArgs>>): Prisma__ItemDoacaoClient<$Result.GetResult<Prisma.$ItemDoacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemDoacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDoacaoCountArgs} args - Arguments to filter ItemDoacaos to count.
     * @example
     * // Count the number of ItemDoacaos
     * const count = await prisma.itemDoacao.count({
     *   where: {
     *     // ... the filter for the ItemDoacaos we want to count
     *   }
     * })
    **/
    count<T extends ItemDoacaoCountArgs>(
      args?: Subset<T, ItemDoacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemDoacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemDoacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDoacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemDoacaoAggregateArgs>(args: Subset<T, ItemDoacaoAggregateArgs>): Prisma.PrismaPromise<GetItemDoacaoAggregateType<T>>

    /**
     * Group by ItemDoacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDoacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemDoacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemDoacaoGroupByArgs['orderBy'] }
        : { orderBy?: ItemDoacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemDoacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemDoacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemDoacao model
   */
  readonly fields: ItemDoacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemDoacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemDoacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doacao<T extends DoacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoacaoDefaultArgs<ExtArgs>>): Prisma__DoacaoClient<$Result.GetResult<Prisma.$DoacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemDoacao model
   */
  interface ItemDoacaoFieldRefs {
    readonly id: FieldRef<"ItemDoacao", 'Int'>
    readonly quantidade: FieldRef<"ItemDoacao", 'Int'>
    readonly doacaoId: FieldRef<"ItemDoacao", 'Int'>
    readonly itemId: FieldRef<"ItemDoacao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ItemDoacao findUnique
   */
  export type ItemDoacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDoacao
     */
    select?: ItemDoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDoacao
     */
    omit?: ItemDoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDoacaoInclude<ExtArgs> | null
    /**
     * Filter, which ItemDoacao to fetch.
     */
    where: ItemDoacaoWhereUniqueInput
  }

  /**
   * ItemDoacao findUniqueOrThrow
   */
  export type ItemDoacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDoacao
     */
    select?: ItemDoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDoacao
     */
    omit?: ItemDoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDoacaoInclude<ExtArgs> | null
    /**
     * Filter, which ItemDoacao to fetch.
     */
    where: ItemDoacaoWhereUniqueInput
  }

  /**
   * ItemDoacao findFirst
   */
  export type ItemDoacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDoacao
     */
    select?: ItemDoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDoacao
     */
    omit?: ItemDoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDoacaoInclude<ExtArgs> | null
    /**
     * Filter, which ItemDoacao to fetch.
     */
    where?: ItemDoacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemDoacaos to fetch.
     */
    orderBy?: ItemDoacaoOrderByWithRelationInput | ItemDoacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemDoacaos.
     */
    cursor?: ItemDoacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemDoacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemDoacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemDoacaos.
     */
    distinct?: ItemDoacaoScalarFieldEnum | ItemDoacaoScalarFieldEnum[]
  }

  /**
   * ItemDoacao findFirstOrThrow
   */
  export type ItemDoacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDoacao
     */
    select?: ItemDoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDoacao
     */
    omit?: ItemDoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDoacaoInclude<ExtArgs> | null
    /**
     * Filter, which ItemDoacao to fetch.
     */
    where?: ItemDoacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemDoacaos to fetch.
     */
    orderBy?: ItemDoacaoOrderByWithRelationInput | ItemDoacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemDoacaos.
     */
    cursor?: ItemDoacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemDoacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemDoacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemDoacaos.
     */
    distinct?: ItemDoacaoScalarFieldEnum | ItemDoacaoScalarFieldEnum[]
  }

  /**
   * ItemDoacao findMany
   */
  export type ItemDoacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDoacao
     */
    select?: ItemDoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDoacao
     */
    omit?: ItemDoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDoacaoInclude<ExtArgs> | null
    /**
     * Filter, which ItemDoacaos to fetch.
     */
    where?: ItemDoacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemDoacaos to fetch.
     */
    orderBy?: ItemDoacaoOrderByWithRelationInput | ItemDoacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemDoacaos.
     */
    cursor?: ItemDoacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemDoacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemDoacaos.
     */
    skip?: number
    distinct?: ItemDoacaoScalarFieldEnum | ItemDoacaoScalarFieldEnum[]
  }

  /**
   * ItemDoacao create
   */
  export type ItemDoacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDoacao
     */
    select?: ItemDoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDoacao
     */
    omit?: ItemDoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDoacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemDoacao.
     */
    data: XOR<ItemDoacaoCreateInput, ItemDoacaoUncheckedCreateInput>
  }

  /**
   * ItemDoacao createMany
   */
  export type ItemDoacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemDoacaos.
     */
    data: ItemDoacaoCreateManyInput | ItemDoacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemDoacao createManyAndReturn
   */
  export type ItemDoacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDoacao
     */
    select?: ItemDoacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDoacao
     */
    omit?: ItemDoacaoOmit<ExtArgs> | null
    /**
     * The data used to create many ItemDoacaos.
     */
    data: ItemDoacaoCreateManyInput | ItemDoacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDoacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemDoacao update
   */
  export type ItemDoacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDoacao
     */
    select?: ItemDoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDoacao
     */
    omit?: ItemDoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDoacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemDoacao.
     */
    data: XOR<ItemDoacaoUpdateInput, ItemDoacaoUncheckedUpdateInput>
    /**
     * Choose, which ItemDoacao to update.
     */
    where: ItemDoacaoWhereUniqueInput
  }

  /**
   * ItemDoacao updateMany
   */
  export type ItemDoacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemDoacaos.
     */
    data: XOR<ItemDoacaoUpdateManyMutationInput, ItemDoacaoUncheckedUpdateManyInput>
    /**
     * Filter which ItemDoacaos to update
     */
    where?: ItemDoacaoWhereInput
    /**
     * Limit how many ItemDoacaos to update.
     */
    limit?: number
  }

  /**
   * ItemDoacao updateManyAndReturn
   */
  export type ItemDoacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDoacao
     */
    select?: ItemDoacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDoacao
     */
    omit?: ItemDoacaoOmit<ExtArgs> | null
    /**
     * The data used to update ItemDoacaos.
     */
    data: XOR<ItemDoacaoUpdateManyMutationInput, ItemDoacaoUncheckedUpdateManyInput>
    /**
     * Filter which ItemDoacaos to update
     */
    where?: ItemDoacaoWhereInput
    /**
     * Limit how many ItemDoacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDoacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemDoacao upsert
   */
  export type ItemDoacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDoacao
     */
    select?: ItemDoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDoacao
     */
    omit?: ItemDoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDoacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemDoacao to update in case it exists.
     */
    where: ItemDoacaoWhereUniqueInput
    /**
     * In case the ItemDoacao found by the `where` argument doesn't exist, create a new ItemDoacao with this data.
     */
    create: XOR<ItemDoacaoCreateInput, ItemDoacaoUncheckedCreateInput>
    /**
     * In case the ItemDoacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemDoacaoUpdateInput, ItemDoacaoUncheckedUpdateInput>
  }

  /**
   * ItemDoacao delete
   */
  export type ItemDoacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDoacao
     */
    select?: ItemDoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDoacao
     */
    omit?: ItemDoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDoacaoInclude<ExtArgs> | null
    /**
     * Filter which ItemDoacao to delete.
     */
    where: ItemDoacaoWhereUniqueInput
  }

  /**
   * ItemDoacao deleteMany
   */
  export type ItemDoacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemDoacaos to delete
     */
    where?: ItemDoacaoWhereInput
    /**
     * Limit how many ItemDoacaos to delete.
     */
    limit?: number
  }

  /**
   * ItemDoacao without action
   */
  export type ItemDoacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDoacao
     */
    select?: ItemDoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDoacao
     */
    omit?: ItemDoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDoacaoInclude<ExtArgs> | null
  }


  /**
   * Model Distribuicao
   */

  export type AggregateDistribuicao = {
    _count: DistribuicaoCountAggregateOutputType | null
    _avg: DistribuicaoAvgAggregateOutputType | null
    _sum: DistribuicaoSumAggregateOutputType | null
    _min: DistribuicaoMinAggregateOutputType | null
    _max: DistribuicaoMaxAggregateOutputType | null
  }

  export type DistribuicaoAvgAggregateOutputType = {
    id: number | null
    voluntarioId: number | null
    beneficiarioId: number | null
  }

  export type DistribuicaoSumAggregateOutputType = {
    id: number | null
    voluntarioId: number | null
    beneficiarioId: number | null
  }

  export type DistribuicaoMinAggregateOutputType = {
    id: number | null
    data: Date | null
    voluntarioId: number | null
    beneficiarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DistribuicaoMaxAggregateOutputType = {
    id: number | null
    data: Date | null
    voluntarioId: number | null
    beneficiarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DistribuicaoCountAggregateOutputType = {
    id: number
    data: number
    voluntarioId: number
    beneficiarioId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DistribuicaoAvgAggregateInputType = {
    id?: true
    voluntarioId?: true
    beneficiarioId?: true
  }

  export type DistribuicaoSumAggregateInputType = {
    id?: true
    voluntarioId?: true
    beneficiarioId?: true
  }

  export type DistribuicaoMinAggregateInputType = {
    id?: true
    data?: true
    voluntarioId?: true
    beneficiarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DistribuicaoMaxAggregateInputType = {
    id?: true
    data?: true
    voluntarioId?: true
    beneficiarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DistribuicaoCountAggregateInputType = {
    id?: true
    data?: true
    voluntarioId?: true
    beneficiarioId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DistribuicaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Distribuicao to aggregate.
     */
    where?: DistribuicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distribuicaos to fetch.
     */
    orderBy?: DistribuicaoOrderByWithRelationInput | DistribuicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistribuicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distribuicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distribuicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Distribuicaos
    **/
    _count?: true | DistribuicaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DistribuicaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DistribuicaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistribuicaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistribuicaoMaxAggregateInputType
  }

  export type GetDistribuicaoAggregateType<T extends DistribuicaoAggregateArgs> = {
        [P in keyof T & keyof AggregateDistribuicao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistribuicao[P]>
      : GetScalarType<T[P], AggregateDistribuicao[P]>
  }




  export type DistribuicaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistribuicaoWhereInput
    orderBy?: DistribuicaoOrderByWithAggregationInput | DistribuicaoOrderByWithAggregationInput[]
    by: DistribuicaoScalarFieldEnum[] | DistribuicaoScalarFieldEnum
    having?: DistribuicaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistribuicaoCountAggregateInputType | true
    _avg?: DistribuicaoAvgAggregateInputType
    _sum?: DistribuicaoSumAggregateInputType
    _min?: DistribuicaoMinAggregateInputType
    _max?: DistribuicaoMaxAggregateInputType
  }

  export type DistribuicaoGroupByOutputType = {
    id: number
    data: Date
    voluntarioId: number
    beneficiarioId: number
    createdAt: Date
    updatedAt: Date
    _count: DistribuicaoCountAggregateOutputType | null
    _avg: DistribuicaoAvgAggregateOutputType | null
    _sum: DistribuicaoSumAggregateOutputType | null
    _min: DistribuicaoMinAggregateOutputType | null
    _max: DistribuicaoMaxAggregateOutputType | null
  }

  type GetDistribuicaoGroupByPayload<T extends DistribuicaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistribuicaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistribuicaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistribuicaoGroupByOutputType[P]>
            : GetScalarType<T[P], DistribuicaoGroupByOutputType[P]>
        }
      >
    >


  export type DistribuicaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    voluntarioId?: boolean
    beneficiarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    voluntario?: boolean | VoluntarioDefaultArgs<ExtArgs>
    beneficiario?: boolean | BeneficiarioDefaultArgs<ExtArgs>
    itens?: boolean | Distribuicao$itensArgs<ExtArgs>
    _count?: boolean | DistribuicaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distribuicao"]>

  export type DistribuicaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    voluntarioId?: boolean
    beneficiarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    voluntario?: boolean | VoluntarioDefaultArgs<ExtArgs>
    beneficiario?: boolean | BeneficiarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distribuicao"]>

  export type DistribuicaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    voluntarioId?: boolean
    beneficiarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    voluntario?: boolean | VoluntarioDefaultArgs<ExtArgs>
    beneficiario?: boolean | BeneficiarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distribuicao"]>

  export type DistribuicaoSelectScalar = {
    id?: boolean
    data?: boolean
    voluntarioId?: boolean
    beneficiarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DistribuicaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "voluntarioId" | "beneficiarioId" | "createdAt" | "updatedAt", ExtArgs["result"]["distribuicao"]>
  export type DistribuicaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voluntario?: boolean | VoluntarioDefaultArgs<ExtArgs>
    beneficiario?: boolean | BeneficiarioDefaultArgs<ExtArgs>
    itens?: boolean | Distribuicao$itensArgs<ExtArgs>
    _count?: boolean | DistribuicaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DistribuicaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voluntario?: boolean | VoluntarioDefaultArgs<ExtArgs>
    beneficiario?: boolean | BeneficiarioDefaultArgs<ExtArgs>
  }
  export type DistribuicaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voluntario?: boolean | VoluntarioDefaultArgs<ExtArgs>
    beneficiario?: boolean | BeneficiarioDefaultArgs<ExtArgs>
  }

  export type $DistribuicaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Distribuicao"
    objects: {
      voluntario: Prisma.$VoluntarioPayload<ExtArgs>
      beneficiario: Prisma.$BeneficiarioPayload<ExtArgs>
      itens: Prisma.$ItemDistribuicaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: Date
      voluntarioId: number
      beneficiarioId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["distribuicao"]>
    composites: {}
  }

  type DistribuicaoGetPayload<S extends boolean | null | undefined | DistribuicaoDefaultArgs> = $Result.GetResult<Prisma.$DistribuicaoPayload, S>

  type DistribuicaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DistribuicaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DistribuicaoCountAggregateInputType | true
    }

  export interface DistribuicaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Distribuicao'], meta: { name: 'Distribuicao' } }
    /**
     * Find zero or one Distribuicao that matches the filter.
     * @param {DistribuicaoFindUniqueArgs} args - Arguments to find a Distribuicao
     * @example
     * // Get one Distribuicao
     * const distribuicao = await prisma.distribuicao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DistribuicaoFindUniqueArgs>(args: SelectSubset<T, DistribuicaoFindUniqueArgs<ExtArgs>>): Prisma__DistribuicaoClient<$Result.GetResult<Prisma.$DistribuicaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Distribuicao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DistribuicaoFindUniqueOrThrowArgs} args - Arguments to find a Distribuicao
     * @example
     * // Get one Distribuicao
     * const distribuicao = await prisma.distribuicao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DistribuicaoFindUniqueOrThrowArgs>(args: SelectSubset<T, DistribuicaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DistribuicaoClient<$Result.GetResult<Prisma.$DistribuicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Distribuicao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistribuicaoFindFirstArgs} args - Arguments to find a Distribuicao
     * @example
     * // Get one Distribuicao
     * const distribuicao = await prisma.distribuicao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DistribuicaoFindFirstArgs>(args?: SelectSubset<T, DistribuicaoFindFirstArgs<ExtArgs>>): Prisma__DistribuicaoClient<$Result.GetResult<Prisma.$DistribuicaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Distribuicao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistribuicaoFindFirstOrThrowArgs} args - Arguments to find a Distribuicao
     * @example
     * // Get one Distribuicao
     * const distribuicao = await prisma.distribuicao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DistribuicaoFindFirstOrThrowArgs>(args?: SelectSubset<T, DistribuicaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DistribuicaoClient<$Result.GetResult<Prisma.$DistribuicaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Distribuicaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistribuicaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Distribuicaos
     * const distribuicaos = await prisma.distribuicao.findMany()
     * 
     * // Get first 10 Distribuicaos
     * const distribuicaos = await prisma.distribuicao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const distribuicaoWithIdOnly = await prisma.distribuicao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DistribuicaoFindManyArgs>(args?: SelectSubset<T, DistribuicaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistribuicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Distribuicao.
     * @param {DistribuicaoCreateArgs} args - Arguments to create a Distribuicao.
     * @example
     * // Create one Distribuicao
     * const Distribuicao = await prisma.distribuicao.create({
     *   data: {
     *     // ... data to create a Distribuicao
     *   }
     * })
     * 
     */
    create<T extends DistribuicaoCreateArgs>(args: SelectSubset<T, DistribuicaoCreateArgs<ExtArgs>>): Prisma__DistribuicaoClient<$Result.GetResult<Prisma.$DistribuicaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Distribuicaos.
     * @param {DistribuicaoCreateManyArgs} args - Arguments to create many Distribuicaos.
     * @example
     * // Create many Distribuicaos
     * const distribuicao = await prisma.distribuicao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DistribuicaoCreateManyArgs>(args?: SelectSubset<T, DistribuicaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Distribuicaos and returns the data saved in the database.
     * @param {DistribuicaoCreateManyAndReturnArgs} args - Arguments to create many Distribuicaos.
     * @example
     * // Create many Distribuicaos
     * const distribuicao = await prisma.distribuicao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Distribuicaos and only return the `id`
     * const distribuicaoWithIdOnly = await prisma.distribuicao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DistribuicaoCreateManyAndReturnArgs>(args?: SelectSubset<T, DistribuicaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistribuicaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Distribuicao.
     * @param {DistribuicaoDeleteArgs} args - Arguments to delete one Distribuicao.
     * @example
     * // Delete one Distribuicao
     * const Distribuicao = await prisma.distribuicao.delete({
     *   where: {
     *     // ... filter to delete one Distribuicao
     *   }
     * })
     * 
     */
    delete<T extends DistribuicaoDeleteArgs>(args: SelectSubset<T, DistribuicaoDeleteArgs<ExtArgs>>): Prisma__DistribuicaoClient<$Result.GetResult<Prisma.$DistribuicaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Distribuicao.
     * @param {DistribuicaoUpdateArgs} args - Arguments to update one Distribuicao.
     * @example
     * // Update one Distribuicao
     * const distribuicao = await prisma.distribuicao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DistribuicaoUpdateArgs>(args: SelectSubset<T, DistribuicaoUpdateArgs<ExtArgs>>): Prisma__DistribuicaoClient<$Result.GetResult<Prisma.$DistribuicaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Distribuicaos.
     * @param {DistribuicaoDeleteManyArgs} args - Arguments to filter Distribuicaos to delete.
     * @example
     * // Delete a few Distribuicaos
     * const { count } = await prisma.distribuicao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DistribuicaoDeleteManyArgs>(args?: SelectSubset<T, DistribuicaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Distribuicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistribuicaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Distribuicaos
     * const distribuicao = await prisma.distribuicao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DistribuicaoUpdateManyArgs>(args: SelectSubset<T, DistribuicaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Distribuicaos and returns the data updated in the database.
     * @param {DistribuicaoUpdateManyAndReturnArgs} args - Arguments to update many Distribuicaos.
     * @example
     * // Update many Distribuicaos
     * const distribuicao = await prisma.distribuicao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Distribuicaos and only return the `id`
     * const distribuicaoWithIdOnly = await prisma.distribuicao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DistribuicaoUpdateManyAndReturnArgs>(args: SelectSubset<T, DistribuicaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistribuicaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Distribuicao.
     * @param {DistribuicaoUpsertArgs} args - Arguments to update or create a Distribuicao.
     * @example
     * // Update or create a Distribuicao
     * const distribuicao = await prisma.distribuicao.upsert({
     *   create: {
     *     // ... data to create a Distribuicao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Distribuicao we want to update
     *   }
     * })
     */
    upsert<T extends DistribuicaoUpsertArgs>(args: SelectSubset<T, DistribuicaoUpsertArgs<ExtArgs>>): Prisma__DistribuicaoClient<$Result.GetResult<Prisma.$DistribuicaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Distribuicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistribuicaoCountArgs} args - Arguments to filter Distribuicaos to count.
     * @example
     * // Count the number of Distribuicaos
     * const count = await prisma.distribuicao.count({
     *   where: {
     *     // ... the filter for the Distribuicaos we want to count
     *   }
     * })
    **/
    count<T extends DistribuicaoCountArgs>(
      args?: Subset<T, DistribuicaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistribuicaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Distribuicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistribuicaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DistribuicaoAggregateArgs>(args: Subset<T, DistribuicaoAggregateArgs>): Prisma.PrismaPromise<GetDistribuicaoAggregateType<T>>

    /**
     * Group by Distribuicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistribuicaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DistribuicaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistribuicaoGroupByArgs['orderBy'] }
        : { orderBy?: DistribuicaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DistribuicaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistribuicaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Distribuicao model
   */
  readonly fields: DistribuicaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Distribuicao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DistribuicaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    voluntario<T extends VoluntarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VoluntarioDefaultArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    beneficiario<T extends BeneficiarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BeneficiarioDefaultArgs<ExtArgs>>): Prisma__BeneficiarioClient<$Result.GetResult<Prisma.$BeneficiarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itens<T extends Distribuicao$itensArgs<ExtArgs> = {}>(args?: Subset<T, Distribuicao$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemDistribuicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Distribuicao model
   */
  interface DistribuicaoFieldRefs {
    readonly id: FieldRef<"Distribuicao", 'Int'>
    readonly data: FieldRef<"Distribuicao", 'DateTime'>
    readonly voluntarioId: FieldRef<"Distribuicao", 'Int'>
    readonly beneficiarioId: FieldRef<"Distribuicao", 'Int'>
    readonly createdAt: FieldRef<"Distribuicao", 'DateTime'>
    readonly updatedAt: FieldRef<"Distribuicao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Distribuicao findUnique
   */
  export type DistribuicaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuicao
     */
    select?: DistribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribuicao
     */
    omit?: DistribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistribuicaoInclude<ExtArgs> | null
    /**
     * Filter, which Distribuicao to fetch.
     */
    where: DistribuicaoWhereUniqueInput
  }

  /**
   * Distribuicao findUniqueOrThrow
   */
  export type DistribuicaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuicao
     */
    select?: DistribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribuicao
     */
    omit?: DistribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistribuicaoInclude<ExtArgs> | null
    /**
     * Filter, which Distribuicao to fetch.
     */
    where: DistribuicaoWhereUniqueInput
  }

  /**
   * Distribuicao findFirst
   */
  export type DistribuicaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuicao
     */
    select?: DistribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribuicao
     */
    omit?: DistribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistribuicaoInclude<ExtArgs> | null
    /**
     * Filter, which Distribuicao to fetch.
     */
    where?: DistribuicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distribuicaos to fetch.
     */
    orderBy?: DistribuicaoOrderByWithRelationInput | DistribuicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Distribuicaos.
     */
    cursor?: DistribuicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distribuicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distribuicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Distribuicaos.
     */
    distinct?: DistribuicaoScalarFieldEnum | DistribuicaoScalarFieldEnum[]
  }

  /**
   * Distribuicao findFirstOrThrow
   */
  export type DistribuicaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuicao
     */
    select?: DistribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribuicao
     */
    omit?: DistribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistribuicaoInclude<ExtArgs> | null
    /**
     * Filter, which Distribuicao to fetch.
     */
    where?: DistribuicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distribuicaos to fetch.
     */
    orderBy?: DistribuicaoOrderByWithRelationInput | DistribuicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Distribuicaos.
     */
    cursor?: DistribuicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distribuicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distribuicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Distribuicaos.
     */
    distinct?: DistribuicaoScalarFieldEnum | DistribuicaoScalarFieldEnum[]
  }

  /**
   * Distribuicao findMany
   */
  export type DistribuicaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuicao
     */
    select?: DistribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribuicao
     */
    omit?: DistribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistribuicaoInclude<ExtArgs> | null
    /**
     * Filter, which Distribuicaos to fetch.
     */
    where?: DistribuicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distribuicaos to fetch.
     */
    orderBy?: DistribuicaoOrderByWithRelationInput | DistribuicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Distribuicaos.
     */
    cursor?: DistribuicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distribuicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distribuicaos.
     */
    skip?: number
    distinct?: DistribuicaoScalarFieldEnum | DistribuicaoScalarFieldEnum[]
  }

  /**
   * Distribuicao create
   */
  export type DistribuicaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuicao
     */
    select?: DistribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribuicao
     */
    omit?: DistribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistribuicaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Distribuicao.
     */
    data: XOR<DistribuicaoCreateInput, DistribuicaoUncheckedCreateInput>
  }

  /**
   * Distribuicao createMany
   */
  export type DistribuicaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Distribuicaos.
     */
    data: DistribuicaoCreateManyInput | DistribuicaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Distribuicao createManyAndReturn
   */
  export type DistribuicaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuicao
     */
    select?: DistribuicaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Distribuicao
     */
    omit?: DistribuicaoOmit<ExtArgs> | null
    /**
     * The data used to create many Distribuicaos.
     */
    data: DistribuicaoCreateManyInput | DistribuicaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistribuicaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Distribuicao update
   */
  export type DistribuicaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuicao
     */
    select?: DistribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribuicao
     */
    omit?: DistribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistribuicaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Distribuicao.
     */
    data: XOR<DistribuicaoUpdateInput, DistribuicaoUncheckedUpdateInput>
    /**
     * Choose, which Distribuicao to update.
     */
    where: DistribuicaoWhereUniqueInput
  }

  /**
   * Distribuicao updateMany
   */
  export type DistribuicaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Distribuicaos.
     */
    data: XOR<DistribuicaoUpdateManyMutationInput, DistribuicaoUncheckedUpdateManyInput>
    /**
     * Filter which Distribuicaos to update
     */
    where?: DistribuicaoWhereInput
    /**
     * Limit how many Distribuicaos to update.
     */
    limit?: number
  }

  /**
   * Distribuicao updateManyAndReturn
   */
  export type DistribuicaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuicao
     */
    select?: DistribuicaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Distribuicao
     */
    omit?: DistribuicaoOmit<ExtArgs> | null
    /**
     * The data used to update Distribuicaos.
     */
    data: XOR<DistribuicaoUpdateManyMutationInput, DistribuicaoUncheckedUpdateManyInput>
    /**
     * Filter which Distribuicaos to update
     */
    where?: DistribuicaoWhereInput
    /**
     * Limit how many Distribuicaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistribuicaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Distribuicao upsert
   */
  export type DistribuicaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuicao
     */
    select?: DistribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribuicao
     */
    omit?: DistribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistribuicaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Distribuicao to update in case it exists.
     */
    where: DistribuicaoWhereUniqueInput
    /**
     * In case the Distribuicao found by the `where` argument doesn't exist, create a new Distribuicao with this data.
     */
    create: XOR<DistribuicaoCreateInput, DistribuicaoUncheckedCreateInput>
    /**
     * In case the Distribuicao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistribuicaoUpdateInput, DistribuicaoUncheckedUpdateInput>
  }

  /**
   * Distribuicao delete
   */
  export type DistribuicaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuicao
     */
    select?: DistribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribuicao
     */
    omit?: DistribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistribuicaoInclude<ExtArgs> | null
    /**
     * Filter which Distribuicao to delete.
     */
    where: DistribuicaoWhereUniqueInput
  }

  /**
   * Distribuicao deleteMany
   */
  export type DistribuicaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Distribuicaos to delete
     */
    where?: DistribuicaoWhereInput
    /**
     * Limit how many Distribuicaos to delete.
     */
    limit?: number
  }

  /**
   * Distribuicao.itens
   */
  export type Distribuicao$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDistribuicao
     */
    select?: ItemDistribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDistribuicao
     */
    omit?: ItemDistribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDistribuicaoInclude<ExtArgs> | null
    where?: ItemDistribuicaoWhereInput
    orderBy?: ItemDistribuicaoOrderByWithRelationInput | ItemDistribuicaoOrderByWithRelationInput[]
    cursor?: ItemDistribuicaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemDistribuicaoScalarFieldEnum | ItemDistribuicaoScalarFieldEnum[]
  }

  /**
   * Distribuicao without action
   */
  export type DistribuicaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuicao
     */
    select?: DistribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distribuicao
     */
    omit?: DistribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistribuicaoInclude<ExtArgs> | null
  }


  /**
   * Model ItemDistribuicao
   */

  export type AggregateItemDistribuicao = {
    _count: ItemDistribuicaoCountAggregateOutputType | null
    _avg: ItemDistribuicaoAvgAggregateOutputType | null
    _sum: ItemDistribuicaoSumAggregateOutputType | null
    _min: ItemDistribuicaoMinAggregateOutputType | null
    _max: ItemDistribuicaoMaxAggregateOutputType | null
  }

  export type ItemDistribuicaoAvgAggregateOutputType = {
    id: number | null
    quantidade: number | null
    distribuicaoId: number | null
    itemId: number | null
  }

  export type ItemDistribuicaoSumAggregateOutputType = {
    id: number | null
    quantidade: number | null
    distribuicaoId: number | null
    itemId: number | null
  }

  export type ItemDistribuicaoMinAggregateOutputType = {
    id: number | null
    quantidade: number | null
    distribuicaoId: number | null
    itemId: number | null
  }

  export type ItemDistribuicaoMaxAggregateOutputType = {
    id: number | null
    quantidade: number | null
    distribuicaoId: number | null
    itemId: number | null
  }

  export type ItemDistribuicaoCountAggregateOutputType = {
    id: number
    quantidade: number
    distribuicaoId: number
    itemId: number
    _all: number
  }


  export type ItemDistribuicaoAvgAggregateInputType = {
    id?: true
    quantidade?: true
    distribuicaoId?: true
    itemId?: true
  }

  export type ItemDistribuicaoSumAggregateInputType = {
    id?: true
    quantidade?: true
    distribuicaoId?: true
    itemId?: true
  }

  export type ItemDistribuicaoMinAggregateInputType = {
    id?: true
    quantidade?: true
    distribuicaoId?: true
    itemId?: true
  }

  export type ItemDistribuicaoMaxAggregateInputType = {
    id?: true
    quantidade?: true
    distribuicaoId?: true
    itemId?: true
  }

  export type ItemDistribuicaoCountAggregateInputType = {
    id?: true
    quantidade?: true
    distribuicaoId?: true
    itemId?: true
    _all?: true
  }

  export type ItemDistribuicaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemDistribuicao to aggregate.
     */
    where?: ItemDistribuicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemDistribuicaos to fetch.
     */
    orderBy?: ItemDistribuicaoOrderByWithRelationInput | ItemDistribuicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemDistribuicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemDistribuicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemDistribuicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemDistribuicaos
    **/
    _count?: true | ItemDistribuicaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemDistribuicaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemDistribuicaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemDistribuicaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemDistribuicaoMaxAggregateInputType
  }

  export type GetItemDistribuicaoAggregateType<T extends ItemDistribuicaoAggregateArgs> = {
        [P in keyof T & keyof AggregateItemDistribuicao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemDistribuicao[P]>
      : GetScalarType<T[P], AggregateItemDistribuicao[P]>
  }




  export type ItemDistribuicaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemDistribuicaoWhereInput
    orderBy?: ItemDistribuicaoOrderByWithAggregationInput | ItemDistribuicaoOrderByWithAggregationInput[]
    by: ItemDistribuicaoScalarFieldEnum[] | ItemDistribuicaoScalarFieldEnum
    having?: ItemDistribuicaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemDistribuicaoCountAggregateInputType | true
    _avg?: ItemDistribuicaoAvgAggregateInputType
    _sum?: ItemDistribuicaoSumAggregateInputType
    _min?: ItemDistribuicaoMinAggregateInputType
    _max?: ItemDistribuicaoMaxAggregateInputType
  }

  export type ItemDistribuicaoGroupByOutputType = {
    id: number
    quantidade: number
    distribuicaoId: number
    itemId: number
    _count: ItemDistribuicaoCountAggregateOutputType | null
    _avg: ItemDistribuicaoAvgAggregateOutputType | null
    _sum: ItemDistribuicaoSumAggregateOutputType | null
    _min: ItemDistribuicaoMinAggregateOutputType | null
    _max: ItemDistribuicaoMaxAggregateOutputType | null
  }

  type GetItemDistribuicaoGroupByPayload<T extends ItemDistribuicaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemDistribuicaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemDistribuicaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemDistribuicaoGroupByOutputType[P]>
            : GetScalarType<T[P], ItemDistribuicaoGroupByOutputType[P]>
        }
      >
    >


  export type ItemDistribuicaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    distribuicaoId?: boolean
    itemId?: boolean
    distribuicao?: boolean | DistribuicaoDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemDistribuicao"]>

  export type ItemDistribuicaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    distribuicaoId?: boolean
    itemId?: boolean
    distribuicao?: boolean | DistribuicaoDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemDistribuicao"]>

  export type ItemDistribuicaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    distribuicaoId?: boolean
    itemId?: boolean
    distribuicao?: boolean | DistribuicaoDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemDistribuicao"]>

  export type ItemDistribuicaoSelectScalar = {
    id?: boolean
    quantidade?: boolean
    distribuicaoId?: boolean
    itemId?: boolean
  }

  export type ItemDistribuicaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantidade" | "distribuicaoId" | "itemId", ExtArgs["result"]["itemDistribuicao"]>
  export type ItemDistribuicaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distribuicao?: boolean | DistribuicaoDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type ItemDistribuicaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distribuicao?: boolean | DistribuicaoDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type ItemDistribuicaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distribuicao?: boolean | DistribuicaoDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $ItemDistribuicaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemDistribuicao"
    objects: {
      distribuicao: Prisma.$DistribuicaoPayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantidade: number
      distribuicaoId: number
      itemId: number
    }, ExtArgs["result"]["itemDistribuicao"]>
    composites: {}
  }

  type ItemDistribuicaoGetPayload<S extends boolean | null | undefined | ItemDistribuicaoDefaultArgs> = $Result.GetResult<Prisma.$ItemDistribuicaoPayload, S>

  type ItemDistribuicaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemDistribuicaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemDistribuicaoCountAggregateInputType | true
    }

  export interface ItemDistribuicaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemDistribuicao'], meta: { name: 'ItemDistribuicao' } }
    /**
     * Find zero or one ItemDistribuicao that matches the filter.
     * @param {ItemDistribuicaoFindUniqueArgs} args - Arguments to find a ItemDistribuicao
     * @example
     * // Get one ItemDistribuicao
     * const itemDistribuicao = await prisma.itemDistribuicao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemDistribuicaoFindUniqueArgs>(args: SelectSubset<T, ItemDistribuicaoFindUniqueArgs<ExtArgs>>): Prisma__ItemDistribuicaoClient<$Result.GetResult<Prisma.$ItemDistribuicaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemDistribuicao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemDistribuicaoFindUniqueOrThrowArgs} args - Arguments to find a ItemDistribuicao
     * @example
     * // Get one ItemDistribuicao
     * const itemDistribuicao = await prisma.itemDistribuicao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemDistribuicaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemDistribuicaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemDistribuicaoClient<$Result.GetResult<Prisma.$ItemDistribuicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemDistribuicao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDistribuicaoFindFirstArgs} args - Arguments to find a ItemDistribuicao
     * @example
     * // Get one ItemDistribuicao
     * const itemDistribuicao = await prisma.itemDistribuicao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemDistribuicaoFindFirstArgs>(args?: SelectSubset<T, ItemDistribuicaoFindFirstArgs<ExtArgs>>): Prisma__ItemDistribuicaoClient<$Result.GetResult<Prisma.$ItemDistribuicaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemDistribuicao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDistribuicaoFindFirstOrThrowArgs} args - Arguments to find a ItemDistribuicao
     * @example
     * // Get one ItemDistribuicao
     * const itemDistribuicao = await prisma.itemDistribuicao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemDistribuicaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemDistribuicaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemDistribuicaoClient<$Result.GetResult<Prisma.$ItemDistribuicaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemDistribuicaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDistribuicaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemDistribuicaos
     * const itemDistribuicaos = await prisma.itemDistribuicao.findMany()
     * 
     * // Get first 10 ItemDistribuicaos
     * const itemDistribuicaos = await prisma.itemDistribuicao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemDistribuicaoWithIdOnly = await prisma.itemDistribuicao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemDistribuicaoFindManyArgs>(args?: SelectSubset<T, ItemDistribuicaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemDistribuicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemDistribuicao.
     * @param {ItemDistribuicaoCreateArgs} args - Arguments to create a ItemDistribuicao.
     * @example
     * // Create one ItemDistribuicao
     * const ItemDistribuicao = await prisma.itemDistribuicao.create({
     *   data: {
     *     // ... data to create a ItemDistribuicao
     *   }
     * })
     * 
     */
    create<T extends ItemDistribuicaoCreateArgs>(args: SelectSubset<T, ItemDistribuicaoCreateArgs<ExtArgs>>): Prisma__ItemDistribuicaoClient<$Result.GetResult<Prisma.$ItemDistribuicaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemDistribuicaos.
     * @param {ItemDistribuicaoCreateManyArgs} args - Arguments to create many ItemDistribuicaos.
     * @example
     * // Create many ItemDistribuicaos
     * const itemDistribuicao = await prisma.itemDistribuicao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemDistribuicaoCreateManyArgs>(args?: SelectSubset<T, ItemDistribuicaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemDistribuicaos and returns the data saved in the database.
     * @param {ItemDistribuicaoCreateManyAndReturnArgs} args - Arguments to create many ItemDistribuicaos.
     * @example
     * // Create many ItemDistribuicaos
     * const itemDistribuicao = await prisma.itemDistribuicao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemDistribuicaos and only return the `id`
     * const itemDistribuicaoWithIdOnly = await prisma.itemDistribuicao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemDistribuicaoCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemDistribuicaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemDistribuicaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemDistribuicao.
     * @param {ItemDistribuicaoDeleteArgs} args - Arguments to delete one ItemDistribuicao.
     * @example
     * // Delete one ItemDistribuicao
     * const ItemDistribuicao = await prisma.itemDistribuicao.delete({
     *   where: {
     *     // ... filter to delete one ItemDistribuicao
     *   }
     * })
     * 
     */
    delete<T extends ItemDistribuicaoDeleteArgs>(args: SelectSubset<T, ItemDistribuicaoDeleteArgs<ExtArgs>>): Prisma__ItemDistribuicaoClient<$Result.GetResult<Prisma.$ItemDistribuicaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemDistribuicao.
     * @param {ItemDistribuicaoUpdateArgs} args - Arguments to update one ItemDistribuicao.
     * @example
     * // Update one ItemDistribuicao
     * const itemDistribuicao = await prisma.itemDistribuicao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemDistribuicaoUpdateArgs>(args: SelectSubset<T, ItemDistribuicaoUpdateArgs<ExtArgs>>): Prisma__ItemDistribuicaoClient<$Result.GetResult<Prisma.$ItemDistribuicaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemDistribuicaos.
     * @param {ItemDistribuicaoDeleteManyArgs} args - Arguments to filter ItemDistribuicaos to delete.
     * @example
     * // Delete a few ItemDistribuicaos
     * const { count } = await prisma.itemDistribuicao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDistribuicaoDeleteManyArgs>(args?: SelectSubset<T, ItemDistribuicaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemDistribuicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDistribuicaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemDistribuicaos
     * const itemDistribuicao = await prisma.itemDistribuicao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemDistribuicaoUpdateManyArgs>(args: SelectSubset<T, ItemDistribuicaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemDistribuicaos and returns the data updated in the database.
     * @param {ItemDistribuicaoUpdateManyAndReturnArgs} args - Arguments to update many ItemDistribuicaos.
     * @example
     * // Update many ItemDistribuicaos
     * const itemDistribuicao = await prisma.itemDistribuicao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemDistribuicaos and only return the `id`
     * const itemDistribuicaoWithIdOnly = await prisma.itemDistribuicao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemDistribuicaoUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemDistribuicaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemDistribuicaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemDistribuicao.
     * @param {ItemDistribuicaoUpsertArgs} args - Arguments to update or create a ItemDistribuicao.
     * @example
     * // Update or create a ItemDistribuicao
     * const itemDistribuicao = await prisma.itemDistribuicao.upsert({
     *   create: {
     *     // ... data to create a ItemDistribuicao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemDistribuicao we want to update
     *   }
     * })
     */
    upsert<T extends ItemDistribuicaoUpsertArgs>(args: SelectSubset<T, ItemDistribuicaoUpsertArgs<ExtArgs>>): Prisma__ItemDistribuicaoClient<$Result.GetResult<Prisma.$ItemDistribuicaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemDistribuicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDistribuicaoCountArgs} args - Arguments to filter ItemDistribuicaos to count.
     * @example
     * // Count the number of ItemDistribuicaos
     * const count = await prisma.itemDistribuicao.count({
     *   where: {
     *     // ... the filter for the ItemDistribuicaos we want to count
     *   }
     * })
    **/
    count<T extends ItemDistribuicaoCountArgs>(
      args?: Subset<T, ItemDistribuicaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemDistribuicaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemDistribuicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDistribuicaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemDistribuicaoAggregateArgs>(args: Subset<T, ItemDistribuicaoAggregateArgs>): Prisma.PrismaPromise<GetItemDistribuicaoAggregateType<T>>

    /**
     * Group by ItemDistribuicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDistribuicaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemDistribuicaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemDistribuicaoGroupByArgs['orderBy'] }
        : { orderBy?: ItemDistribuicaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemDistribuicaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemDistribuicaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemDistribuicao model
   */
  readonly fields: ItemDistribuicaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemDistribuicao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemDistribuicaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    distribuicao<T extends DistribuicaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DistribuicaoDefaultArgs<ExtArgs>>): Prisma__DistribuicaoClient<$Result.GetResult<Prisma.$DistribuicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemDistribuicao model
   */
  interface ItemDistribuicaoFieldRefs {
    readonly id: FieldRef<"ItemDistribuicao", 'Int'>
    readonly quantidade: FieldRef<"ItemDistribuicao", 'Int'>
    readonly distribuicaoId: FieldRef<"ItemDistribuicao", 'Int'>
    readonly itemId: FieldRef<"ItemDistribuicao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ItemDistribuicao findUnique
   */
  export type ItemDistribuicaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDistribuicao
     */
    select?: ItemDistribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDistribuicao
     */
    omit?: ItemDistribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDistribuicaoInclude<ExtArgs> | null
    /**
     * Filter, which ItemDistribuicao to fetch.
     */
    where: ItemDistribuicaoWhereUniqueInput
  }

  /**
   * ItemDistribuicao findUniqueOrThrow
   */
  export type ItemDistribuicaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDistribuicao
     */
    select?: ItemDistribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDistribuicao
     */
    omit?: ItemDistribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDistribuicaoInclude<ExtArgs> | null
    /**
     * Filter, which ItemDistribuicao to fetch.
     */
    where: ItemDistribuicaoWhereUniqueInput
  }

  /**
   * ItemDistribuicao findFirst
   */
  export type ItemDistribuicaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDistribuicao
     */
    select?: ItemDistribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDistribuicao
     */
    omit?: ItemDistribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDistribuicaoInclude<ExtArgs> | null
    /**
     * Filter, which ItemDistribuicao to fetch.
     */
    where?: ItemDistribuicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemDistribuicaos to fetch.
     */
    orderBy?: ItemDistribuicaoOrderByWithRelationInput | ItemDistribuicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemDistribuicaos.
     */
    cursor?: ItemDistribuicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemDistribuicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemDistribuicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemDistribuicaos.
     */
    distinct?: ItemDistribuicaoScalarFieldEnum | ItemDistribuicaoScalarFieldEnum[]
  }

  /**
   * ItemDistribuicao findFirstOrThrow
   */
  export type ItemDistribuicaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDistribuicao
     */
    select?: ItemDistribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDistribuicao
     */
    omit?: ItemDistribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDistribuicaoInclude<ExtArgs> | null
    /**
     * Filter, which ItemDistribuicao to fetch.
     */
    where?: ItemDistribuicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemDistribuicaos to fetch.
     */
    orderBy?: ItemDistribuicaoOrderByWithRelationInput | ItemDistribuicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemDistribuicaos.
     */
    cursor?: ItemDistribuicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemDistribuicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemDistribuicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemDistribuicaos.
     */
    distinct?: ItemDistribuicaoScalarFieldEnum | ItemDistribuicaoScalarFieldEnum[]
  }

  /**
   * ItemDistribuicao findMany
   */
  export type ItemDistribuicaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDistribuicao
     */
    select?: ItemDistribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDistribuicao
     */
    omit?: ItemDistribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDistribuicaoInclude<ExtArgs> | null
    /**
     * Filter, which ItemDistribuicaos to fetch.
     */
    where?: ItemDistribuicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemDistribuicaos to fetch.
     */
    orderBy?: ItemDistribuicaoOrderByWithRelationInput | ItemDistribuicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemDistribuicaos.
     */
    cursor?: ItemDistribuicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemDistribuicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemDistribuicaos.
     */
    skip?: number
    distinct?: ItemDistribuicaoScalarFieldEnum | ItemDistribuicaoScalarFieldEnum[]
  }

  /**
   * ItemDistribuicao create
   */
  export type ItemDistribuicaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDistribuicao
     */
    select?: ItemDistribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDistribuicao
     */
    omit?: ItemDistribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDistribuicaoInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemDistribuicao.
     */
    data: XOR<ItemDistribuicaoCreateInput, ItemDistribuicaoUncheckedCreateInput>
  }

  /**
   * ItemDistribuicao createMany
   */
  export type ItemDistribuicaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemDistribuicaos.
     */
    data: ItemDistribuicaoCreateManyInput | ItemDistribuicaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemDistribuicao createManyAndReturn
   */
  export type ItemDistribuicaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDistribuicao
     */
    select?: ItemDistribuicaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDistribuicao
     */
    omit?: ItemDistribuicaoOmit<ExtArgs> | null
    /**
     * The data used to create many ItemDistribuicaos.
     */
    data: ItemDistribuicaoCreateManyInput | ItemDistribuicaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDistribuicaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemDistribuicao update
   */
  export type ItemDistribuicaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDistribuicao
     */
    select?: ItemDistribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDistribuicao
     */
    omit?: ItemDistribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDistribuicaoInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemDistribuicao.
     */
    data: XOR<ItemDistribuicaoUpdateInput, ItemDistribuicaoUncheckedUpdateInput>
    /**
     * Choose, which ItemDistribuicao to update.
     */
    where: ItemDistribuicaoWhereUniqueInput
  }

  /**
   * ItemDistribuicao updateMany
   */
  export type ItemDistribuicaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemDistribuicaos.
     */
    data: XOR<ItemDistribuicaoUpdateManyMutationInput, ItemDistribuicaoUncheckedUpdateManyInput>
    /**
     * Filter which ItemDistribuicaos to update
     */
    where?: ItemDistribuicaoWhereInput
    /**
     * Limit how many ItemDistribuicaos to update.
     */
    limit?: number
  }

  /**
   * ItemDistribuicao updateManyAndReturn
   */
  export type ItemDistribuicaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDistribuicao
     */
    select?: ItemDistribuicaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDistribuicao
     */
    omit?: ItemDistribuicaoOmit<ExtArgs> | null
    /**
     * The data used to update ItemDistribuicaos.
     */
    data: XOR<ItemDistribuicaoUpdateManyMutationInput, ItemDistribuicaoUncheckedUpdateManyInput>
    /**
     * Filter which ItemDistribuicaos to update
     */
    where?: ItemDistribuicaoWhereInput
    /**
     * Limit how many ItemDistribuicaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDistribuicaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemDistribuicao upsert
   */
  export type ItemDistribuicaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDistribuicao
     */
    select?: ItemDistribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDistribuicao
     */
    omit?: ItemDistribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDistribuicaoInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemDistribuicao to update in case it exists.
     */
    where: ItemDistribuicaoWhereUniqueInput
    /**
     * In case the ItemDistribuicao found by the `where` argument doesn't exist, create a new ItemDistribuicao with this data.
     */
    create: XOR<ItemDistribuicaoCreateInput, ItemDistribuicaoUncheckedCreateInput>
    /**
     * In case the ItemDistribuicao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemDistribuicaoUpdateInput, ItemDistribuicaoUncheckedUpdateInput>
  }

  /**
   * ItemDistribuicao delete
   */
  export type ItemDistribuicaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDistribuicao
     */
    select?: ItemDistribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDistribuicao
     */
    omit?: ItemDistribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDistribuicaoInclude<ExtArgs> | null
    /**
     * Filter which ItemDistribuicao to delete.
     */
    where: ItemDistribuicaoWhereUniqueInput
  }

  /**
   * ItemDistribuicao deleteMany
   */
  export type ItemDistribuicaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemDistribuicaos to delete
     */
    where?: ItemDistribuicaoWhereInput
    /**
     * Limit how many ItemDistribuicaos to delete.
     */
    limit?: number
  }

  /**
   * ItemDistribuicao without action
   */
  export type ItemDistribuicaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDistribuicao
     */
    select?: ItemDistribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDistribuicao
     */
    omit?: ItemDistribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDistribuicaoInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    id: number | null
    quantidadeEstoque: number | null
    tipoId: number | null
    tamanhoId: number | null
  }

  export type ItemSumAggregateOutputType = {
    id: number | null
    quantidadeEstoque: number | null
    tipoId: number | null
    tamanhoId: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: number | null
    quantidadeEstoque: number | null
    tipoId: number | null
    tamanhoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemMaxAggregateOutputType = {
    id: number | null
    quantidadeEstoque: number | null
    tipoId: number | null
    tamanhoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    quantidadeEstoque: number
    tipoId: number
    tamanhoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id?: true
    quantidadeEstoque?: true
    tipoId?: true
    tamanhoId?: true
  }

  export type ItemSumAggregateInputType = {
    id?: true
    quantidadeEstoque?: true
    tipoId?: true
    tamanhoId?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    quantidadeEstoque?: true
    tipoId?: true
    tamanhoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    quantidadeEstoque?: true
    tipoId?: true
    tamanhoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    quantidadeEstoque?: true
    tipoId?: true
    tamanhoId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: number
    quantidadeEstoque: number
    tipoId: number
    tamanhoId: number
    createdAt: Date
    updatedAt: Date
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidadeEstoque?: boolean
    tipoId?: boolean
    tamanhoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
    tamanho?: boolean | TamanhoDefaultArgs<ExtArgs>
    entradas?: boolean | Item$entradasArgs<ExtArgs>
    saidas?: boolean | Item$saidasArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidadeEstoque?: boolean
    tipoId?: boolean
    tamanhoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
    tamanho?: boolean | TamanhoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidadeEstoque?: boolean
    tipoId?: boolean
    tamanhoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
    tamanho?: boolean | TamanhoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    quantidadeEstoque?: boolean
    tipoId?: boolean
    tamanhoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantidadeEstoque" | "tipoId" | "tamanhoId" | "createdAt" | "updatedAt", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
    tamanho?: boolean | TamanhoDefaultArgs<ExtArgs>
    entradas?: boolean | Item$entradasArgs<ExtArgs>
    saidas?: boolean | Item$saidasArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
    tamanho?: boolean | TamanhoDefaultArgs<ExtArgs>
  }
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
    tamanho?: boolean | TamanhoDefaultArgs<ExtArgs>
  }

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      tipo: Prisma.$TipoPayload<ExtArgs>
      tamanho: Prisma.$TamanhoPayload<ExtArgs>
      entradas: Prisma.$ItemDoacaoPayload<ExtArgs>[]
      saidas: Prisma.$ItemDistribuicaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantidadeEstoque: number
      tipoId: number
      tamanhoId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipo<T extends TipoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoDefaultArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tamanho<T extends TamanhoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TamanhoDefaultArgs<ExtArgs>>): Prisma__TamanhoClient<$Result.GetResult<Prisma.$TamanhoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    entradas<T extends Item$entradasArgs<ExtArgs> = {}>(args?: Subset<T, Item$entradasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemDoacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    saidas<T extends Item$saidasArgs<ExtArgs> = {}>(args?: Subset<T, Item$saidasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemDistribuicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'Int'>
    readonly quantidadeEstoque: FieldRef<"Item", 'Int'>
    readonly tipoId: FieldRef<"Item", 'Int'>
    readonly tamanhoId: FieldRef<"Item", 'Int'>
    readonly createdAt: FieldRef<"Item", 'DateTime'>
    readonly updatedAt: FieldRef<"Item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item.entradas
   */
  export type Item$entradasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDoacao
     */
    select?: ItemDoacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDoacao
     */
    omit?: ItemDoacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDoacaoInclude<ExtArgs> | null
    where?: ItemDoacaoWhereInput
    orderBy?: ItemDoacaoOrderByWithRelationInput | ItemDoacaoOrderByWithRelationInput[]
    cursor?: ItemDoacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemDoacaoScalarFieldEnum | ItemDoacaoScalarFieldEnum[]
  }

  /**
   * Item.saidas
   */
  export type Item$saidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDistribuicao
     */
    select?: ItemDistribuicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDistribuicao
     */
    omit?: ItemDistribuicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemDistribuicaoInclude<ExtArgs> | null
    where?: ItemDistribuicaoWhereInput
    orderBy?: ItemDistribuicaoOrderByWithRelationInput | ItemDistribuicaoOrderByWithRelationInput[]
    cursor?: ItemDistribuicaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemDistribuicaoScalarFieldEnum | ItemDistribuicaoScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model Tipo
   */

  export type AggregateTipo = {
    _count: TipoCountAggregateOutputType | null
    _avg: TipoAvgAggregateOutputType | null
    _sum: TipoSumAggregateOutputType | null
    _min: TipoMinAggregateOutputType | null
    _max: TipoMaxAggregateOutputType | null
  }

  export type TipoAvgAggregateOutputType = {
    id: number | null
  }

  export type TipoSumAggregateOutputType = {
    id: number | null
  }

  export type TipoMinAggregateOutputType = {
    id: number | null
    descricao: string | null
  }

  export type TipoMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
  }

  export type TipoCountAggregateOutputType = {
    id: number
    descricao: number
    _all: number
  }


  export type TipoAvgAggregateInputType = {
    id?: true
  }

  export type TipoSumAggregateInputType = {
    id?: true
  }

  export type TipoMinAggregateInputType = {
    id?: true
    descricao?: true
  }

  export type TipoMaxAggregateInputType = {
    id?: true
    descricao?: true
  }

  export type TipoCountAggregateInputType = {
    id?: true
    descricao?: true
    _all?: true
  }

  export type TipoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tipo to aggregate.
     */
    where?: TipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tipos to fetch.
     */
    orderBy?: TipoOrderByWithRelationInput | TipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tipos
    **/
    _count?: true | TipoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoMaxAggregateInputType
  }

  export type GetTipoAggregateType<T extends TipoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipo[P]>
      : GetScalarType<T[P], AggregateTipo[P]>
  }




  export type TipoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoWhereInput
    orderBy?: TipoOrderByWithAggregationInput | TipoOrderByWithAggregationInput[]
    by: TipoScalarFieldEnum[] | TipoScalarFieldEnum
    having?: TipoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoCountAggregateInputType | true
    _avg?: TipoAvgAggregateInputType
    _sum?: TipoSumAggregateInputType
    _min?: TipoMinAggregateInputType
    _max?: TipoMaxAggregateInputType
  }

  export type TipoGroupByOutputType = {
    id: number
    descricao: string
    _count: TipoCountAggregateOutputType | null
    _avg: TipoAvgAggregateOutputType | null
    _sum: TipoSumAggregateOutputType | null
    _min: TipoMinAggregateOutputType | null
    _max: TipoMaxAggregateOutputType | null
  }

  type GetTipoGroupByPayload<T extends TipoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoGroupByOutputType[P]>
            : GetScalarType<T[P], TipoGroupByOutputType[P]>
        }
      >
    >


  export type TipoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    tamanhos?: boolean | Tipo$tamanhosArgs<ExtArgs>
    itens?: boolean | Tipo$itensArgs<ExtArgs>
    _count?: boolean | TipoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipo"]>

  export type TipoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["tipo"]>

  export type TipoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["tipo"]>

  export type TipoSelectScalar = {
    id?: boolean
    descricao?: boolean
  }

  export type TipoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao", ExtArgs["result"]["tipo"]>
  export type TipoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tamanhos?: boolean | Tipo$tamanhosArgs<ExtArgs>
    itens?: boolean | Tipo$itensArgs<ExtArgs>
    _count?: boolean | TipoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TipoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TipoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tipo"
    objects: {
      tamanhos: Prisma.$TamanhoPayload<ExtArgs>[]
      itens: Prisma.$ItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string
    }, ExtArgs["result"]["tipo"]>
    composites: {}
  }

  type TipoGetPayload<S extends boolean | null | undefined | TipoDefaultArgs> = $Result.GetResult<Prisma.$TipoPayload, S>

  type TipoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoCountAggregateInputType | true
    }

  export interface TipoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tipo'], meta: { name: 'Tipo' } }
    /**
     * Find zero or one Tipo that matches the filter.
     * @param {TipoFindUniqueArgs} args - Arguments to find a Tipo
     * @example
     * // Get one Tipo
     * const tipo = await prisma.tipo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoFindUniqueArgs>(args: SelectSubset<T, TipoFindUniqueArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tipo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoFindUniqueOrThrowArgs} args - Arguments to find a Tipo
     * @example
     * // Get one Tipo
     * const tipo = await prisma.tipo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoFindFirstArgs} args - Arguments to find a Tipo
     * @example
     * // Get one Tipo
     * const tipo = await prisma.tipo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoFindFirstArgs>(args?: SelectSubset<T, TipoFindFirstArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoFindFirstOrThrowArgs} args - Arguments to find a Tipo
     * @example
     * // Get one Tipo
     * const tipo = await prisma.tipo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tipos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipos
     * const tipos = await prisma.tipo.findMany()
     * 
     * // Get first 10 Tipos
     * const tipos = await prisma.tipo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoWithIdOnly = await prisma.tipo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoFindManyArgs>(args?: SelectSubset<T, TipoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tipo.
     * @param {TipoCreateArgs} args - Arguments to create a Tipo.
     * @example
     * // Create one Tipo
     * const Tipo = await prisma.tipo.create({
     *   data: {
     *     // ... data to create a Tipo
     *   }
     * })
     * 
     */
    create<T extends TipoCreateArgs>(args: SelectSubset<T, TipoCreateArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tipos.
     * @param {TipoCreateManyArgs} args - Arguments to create many Tipos.
     * @example
     * // Create many Tipos
     * const tipo = await prisma.tipo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoCreateManyArgs>(args?: SelectSubset<T, TipoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tipos and returns the data saved in the database.
     * @param {TipoCreateManyAndReturnArgs} args - Arguments to create many Tipos.
     * @example
     * // Create many Tipos
     * const tipo = await prisma.tipo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tipos and only return the `id`
     * const tipoWithIdOnly = await prisma.tipo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tipo.
     * @param {TipoDeleteArgs} args - Arguments to delete one Tipo.
     * @example
     * // Delete one Tipo
     * const Tipo = await prisma.tipo.delete({
     *   where: {
     *     // ... filter to delete one Tipo
     *   }
     * })
     * 
     */
    delete<T extends TipoDeleteArgs>(args: SelectSubset<T, TipoDeleteArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tipo.
     * @param {TipoUpdateArgs} args - Arguments to update one Tipo.
     * @example
     * // Update one Tipo
     * const tipo = await prisma.tipo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoUpdateArgs>(args: SelectSubset<T, TipoUpdateArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tipos.
     * @param {TipoDeleteManyArgs} args - Arguments to filter Tipos to delete.
     * @example
     * // Delete a few Tipos
     * const { count } = await prisma.tipo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoDeleteManyArgs>(args?: SelectSubset<T, TipoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipos
     * const tipo = await prisma.tipo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoUpdateManyArgs>(args: SelectSubset<T, TipoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipos and returns the data updated in the database.
     * @param {TipoUpdateManyAndReturnArgs} args - Arguments to update many Tipos.
     * @example
     * // Update many Tipos
     * const tipo = await prisma.tipo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tipos and only return the `id`
     * const tipoWithIdOnly = await prisma.tipo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TipoUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tipo.
     * @param {TipoUpsertArgs} args - Arguments to update or create a Tipo.
     * @example
     * // Update or create a Tipo
     * const tipo = await prisma.tipo.upsert({
     *   create: {
     *     // ... data to create a Tipo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipo we want to update
     *   }
     * })
     */
    upsert<T extends TipoUpsertArgs>(args: SelectSubset<T, TipoUpsertArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCountArgs} args - Arguments to filter Tipos to count.
     * @example
     * // Count the number of Tipos
     * const count = await prisma.tipo.count({
     *   where: {
     *     // ... the filter for the Tipos we want to count
     *   }
     * })
    **/
    count<T extends TipoCountArgs>(
      args?: Subset<T, TipoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipoAggregateArgs>(args: Subset<T, TipoAggregateArgs>): Prisma.PrismaPromise<GetTipoAggregateType<T>>

    /**
     * Group by Tipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TipoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoGroupByArgs['orderBy'] }
        : { orderBy?: TipoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TipoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tipo model
   */
  readonly fields: TipoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tipo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tamanhos<T extends Tipo$tamanhosArgs<ExtArgs> = {}>(args?: Subset<T, Tipo$tamanhosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TamanhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    itens<T extends Tipo$itensArgs<ExtArgs> = {}>(args?: Subset<T, Tipo$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tipo model
   */
  interface TipoFieldRefs {
    readonly id: FieldRef<"Tipo", 'Int'>
    readonly descricao: FieldRef<"Tipo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tipo findUnique
   */
  export type TipoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter, which Tipo to fetch.
     */
    where: TipoWhereUniqueInput
  }

  /**
   * Tipo findUniqueOrThrow
   */
  export type TipoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter, which Tipo to fetch.
     */
    where: TipoWhereUniqueInput
  }

  /**
   * Tipo findFirst
   */
  export type TipoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter, which Tipo to fetch.
     */
    where?: TipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tipos to fetch.
     */
    orderBy?: TipoOrderByWithRelationInput | TipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tipos.
     */
    cursor?: TipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tipos.
     */
    distinct?: TipoScalarFieldEnum | TipoScalarFieldEnum[]
  }

  /**
   * Tipo findFirstOrThrow
   */
  export type TipoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter, which Tipo to fetch.
     */
    where?: TipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tipos to fetch.
     */
    orderBy?: TipoOrderByWithRelationInput | TipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tipos.
     */
    cursor?: TipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tipos.
     */
    distinct?: TipoScalarFieldEnum | TipoScalarFieldEnum[]
  }

  /**
   * Tipo findMany
   */
  export type TipoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter, which Tipos to fetch.
     */
    where?: TipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tipos to fetch.
     */
    orderBy?: TipoOrderByWithRelationInput | TipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tipos.
     */
    cursor?: TipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tipos.
     */
    skip?: number
    distinct?: TipoScalarFieldEnum | TipoScalarFieldEnum[]
  }

  /**
   * Tipo create
   */
  export type TipoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * The data needed to create a Tipo.
     */
    data: XOR<TipoCreateInput, TipoUncheckedCreateInput>
  }

  /**
   * Tipo createMany
   */
  export type TipoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tipos.
     */
    data: TipoCreateManyInput | TipoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tipo createManyAndReturn
   */
  export type TipoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * The data used to create many Tipos.
     */
    data: TipoCreateManyInput | TipoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tipo update
   */
  export type TipoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * The data needed to update a Tipo.
     */
    data: XOR<TipoUpdateInput, TipoUncheckedUpdateInput>
    /**
     * Choose, which Tipo to update.
     */
    where: TipoWhereUniqueInput
  }

  /**
   * Tipo updateMany
   */
  export type TipoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tipos.
     */
    data: XOR<TipoUpdateManyMutationInput, TipoUncheckedUpdateManyInput>
    /**
     * Filter which Tipos to update
     */
    where?: TipoWhereInput
    /**
     * Limit how many Tipos to update.
     */
    limit?: number
  }

  /**
   * Tipo updateManyAndReturn
   */
  export type TipoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * The data used to update Tipos.
     */
    data: XOR<TipoUpdateManyMutationInput, TipoUncheckedUpdateManyInput>
    /**
     * Filter which Tipos to update
     */
    where?: TipoWhereInput
    /**
     * Limit how many Tipos to update.
     */
    limit?: number
  }

  /**
   * Tipo upsert
   */
  export type TipoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * The filter to search for the Tipo to update in case it exists.
     */
    where: TipoWhereUniqueInput
    /**
     * In case the Tipo found by the `where` argument doesn't exist, create a new Tipo with this data.
     */
    create: XOR<TipoCreateInput, TipoUncheckedCreateInput>
    /**
     * In case the Tipo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoUpdateInput, TipoUncheckedUpdateInput>
  }

  /**
   * Tipo delete
   */
  export type TipoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter which Tipo to delete.
     */
    where: TipoWhereUniqueInput
  }

  /**
   * Tipo deleteMany
   */
  export type TipoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tipos to delete
     */
    where?: TipoWhereInput
    /**
     * Limit how many Tipos to delete.
     */
    limit?: number
  }

  /**
   * Tipo.tamanhos
   */
  export type Tipo$tamanhosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tamanho
     */
    select?: TamanhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tamanho
     */
    omit?: TamanhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TamanhoInclude<ExtArgs> | null
    where?: TamanhoWhereInput
    orderBy?: TamanhoOrderByWithRelationInput | TamanhoOrderByWithRelationInput[]
    cursor?: TamanhoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TamanhoScalarFieldEnum | TamanhoScalarFieldEnum[]
  }

  /**
   * Tipo.itens
   */
  export type Tipo$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Tipo without action
   */
  export type TipoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
  }


  /**
   * Model Tamanho
   */

  export type AggregateTamanho = {
    _count: TamanhoCountAggregateOutputType | null
    _avg: TamanhoAvgAggregateOutputType | null
    _sum: TamanhoSumAggregateOutputType | null
    _min: TamanhoMinAggregateOutputType | null
    _max: TamanhoMaxAggregateOutputType | null
  }

  export type TamanhoAvgAggregateOutputType = {
    id: number | null
    tipoId: number | null
  }

  export type TamanhoSumAggregateOutputType = {
    id: number | null
    tipoId: number | null
  }

  export type TamanhoMinAggregateOutputType = {
    id: number | null
    descricao: string | null
    tipoId: number | null
  }

  export type TamanhoMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
    tipoId: number | null
  }

  export type TamanhoCountAggregateOutputType = {
    id: number
    descricao: number
    tipoId: number
    _all: number
  }


  export type TamanhoAvgAggregateInputType = {
    id?: true
    tipoId?: true
  }

  export type TamanhoSumAggregateInputType = {
    id?: true
    tipoId?: true
  }

  export type TamanhoMinAggregateInputType = {
    id?: true
    descricao?: true
    tipoId?: true
  }

  export type TamanhoMaxAggregateInputType = {
    id?: true
    descricao?: true
    tipoId?: true
  }

  export type TamanhoCountAggregateInputType = {
    id?: true
    descricao?: true
    tipoId?: true
    _all?: true
  }

  export type TamanhoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tamanho to aggregate.
     */
    where?: TamanhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tamanhos to fetch.
     */
    orderBy?: TamanhoOrderByWithRelationInput | TamanhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TamanhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tamanhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tamanhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tamanhos
    **/
    _count?: true | TamanhoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TamanhoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TamanhoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TamanhoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TamanhoMaxAggregateInputType
  }

  export type GetTamanhoAggregateType<T extends TamanhoAggregateArgs> = {
        [P in keyof T & keyof AggregateTamanho]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTamanho[P]>
      : GetScalarType<T[P], AggregateTamanho[P]>
  }




  export type TamanhoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TamanhoWhereInput
    orderBy?: TamanhoOrderByWithAggregationInput | TamanhoOrderByWithAggregationInput[]
    by: TamanhoScalarFieldEnum[] | TamanhoScalarFieldEnum
    having?: TamanhoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TamanhoCountAggregateInputType | true
    _avg?: TamanhoAvgAggregateInputType
    _sum?: TamanhoSumAggregateInputType
    _min?: TamanhoMinAggregateInputType
    _max?: TamanhoMaxAggregateInputType
  }

  export type TamanhoGroupByOutputType = {
    id: number
    descricao: string
    tipoId: number
    _count: TamanhoCountAggregateOutputType | null
    _avg: TamanhoAvgAggregateOutputType | null
    _sum: TamanhoSumAggregateOutputType | null
    _min: TamanhoMinAggregateOutputType | null
    _max: TamanhoMaxAggregateOutputType | null
  }

  type GetTamanhoGroupByPayload<T extends TamanhoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TamanhoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TamanhoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TamanhoGroupByOutputType[P]>
            : GetScalarType<T[P], TamanhoGroupByOutputType[P]>
        }
      >
    >


  export type TamanhoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    tipoId?: boolean
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
    itens?: boolean | Tamanho$itensArgs<ExtArgs>
    _count?: boolean | TamanhoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tamanho"]>

  export type TamanhoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    tipoId?: boolean
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tamanho"]>

  export type TamanhoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    tipoId?: boolean
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tamanho"]>

  export type TamanhoSelectScalar = {
    id?: boolean
    descricao?: boolean
    tipoId?: boolean
  }

  export type TamanhoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "tipoId", ExtArgs["result"]["tamanho"]>
  export type TamanhoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
    itens?: boolean | Tamanho$itensArgs<ExtArgs>
    _count?: boolean | TamanhoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TamanhoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
  }
  export type TamanhoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
  }

  export type $TamanhoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tamanho"
    objects: {
      tipo: Prisma.$TipoPayload<ExtArgs>
      itens: Prisma.$ItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string
      tipoId: number
    }, ExtArgs["result"]["tamanho"]>
    composites: {}
  }

  type TamanhoGetPayload<S extends boolean | null | undefined | TamanhoDefaultArgs> = $Result.GetResult<Prisma.$TamanhoPayload, S>

  type TamanhoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TamanhoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TamanhoCountAggregateInputType | true
    }

  export interface TamanhoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tamanho'], meta: { name: 'Tamanho' } }
    /**
     * Find zero or one Tamanho that matches the filter.
     * @param {TamanhoFindUniqueArgs} args - Arguments to find a Tamanho
     * @example
     * // Get one Tamanho
     * const tamanho = await prisma.tamanho.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TamanhoFindUniqueArgs>(args: SelectSubset<T, TamanhoFindUniqueArgs<ExtArgs>>): Prisma__TamanhoClient<$Result.GetResult<Prisma.$TamanhoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tamanho that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TamanhoFindUniqueOrThrowArgs} args - Arguments to find a Tamanho
     * @example
     * // Get one Tamanho
     * const tamanho = await prisma.tamanho.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TamanhoFindUniqueOrThrowArgs>(args: SelectSubset<T, TamanhoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TamanhoClient<$Result.GetResult<Prisma.$TamanhoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tamanho that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TamanhoFindFirstArgs} args - Arguments to find a Tamanho
     * @example
     * // Get one Tamanho
     * const tamanho = await prisma.tamanho.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TamanhoFindFirstArgs>(args?: SelectSubset<T, TamanhoFindFirstArgs<ExtArgs>>): Prisma__TamanhoClient<$Result.GetResult<Prisma.$TamanhoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tamanho that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TamanhoFindFirstOrThrowArgs} args - Arguments to find a Tamanho
     * @example
     * // Get one Tamanho
     * const tamanho = await prisma.tamanho.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TamanhoFindFirstOrThrowArgs>(args?: SelectSubset<T, TamanhoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TamanhoClient<$Result.GetResult<Prisma.$TamanhoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tamanhos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TamanhoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tamanhos
     * const tamanhos = await prisma.tamanho.findMany()
     * 
     * // Get first 10 Tamanhos
     * const tamanhos = await prisma.tamanho.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tamanhoWithIdOnly = await prisma.tamanho.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TamanhoFindManyArgs>(args?: SelectSubset<T, TamanhoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TamanhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tamanho.
     * @param {TamanhoCreateArgs} args - Arguments to create a Tamanho.
     * @example
     * // Create one Tamanho
     * const Tamanho = await prisma.tamanho.create({
     *   data: {
     *     // ... data to create a Tamanho
     *   }
     * })
     * 
     */
    create<T extends TamanhoCreateArgs>(args: SelectSubset<T, TamanhoCreateArgs<ExtArgs>>): Prisma__TamanhoClient<$Result.GetResult<Prisma.$TamanhoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tamanhos.
     * @param {TamanhoCreateManyArgs} args - Arguments to create many Tamanhos.
     * @example
     * // Create many Tamanhos
     * const tamanho = await prisma.tamanho.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TamanhoCreateManyArgs>(args?: SelectSubset<T, TamanhoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tamanhos and returns the data saved in the database.
     * @param {TamanhoCreateManyAndReturnArgs} args - Arguments to create many Tamanhos.
     * @example
     * // Create many Tamanhos
     * const tamanho = await prisma.tamanho.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tamanhos and only return the `id`
     * const tamanhoWithIdOnly = await prisma.tamanho.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TamanhoCreateManyAndReturnArgs>(args?: SelectSubset<T, TamanhoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TamanhoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tamanho.
     * @param {TamanhoDeleteArgs} args - Arguments to delete one Tamanho.
     * @example
     * // Delete one Tamanho
     * const Tamanho = await prisma.tamanho.delete({
     *   where: {
     *     // ... filter to delete one Tamanho
     *   }
     * })
     * 
     */
    delete<T extends TamanhoDeleteArgs>(args: SelectSubset<T, TamanhoDeleteArgs<ExtArgs>>): Prisma__TamanhoClient<$Result.GetResult<Prisma.$TamanhoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tamanho.
     * @param {TamanhoUpdateArgs} args - Arguments to update one Tamanho.
     * @example
     * // Update one Tamanho
     * const tamanho = await prisma.tamanho.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TamanhoUpdateArgs>(args: SelectSubset<T, TamanhoUpdateArgs<ExtArgs>>): Prisma__TamanhoClient<$Result.GetResult<Prisma.$TamanhoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tamanhos.
     * @param {TamanhoDeleteManyArgs} args - Arguments to filter Tamanhos to delete.
     * @example
     * // Delete a few Tamanhos
     * const { count } = await prisma.tamanho.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TamanhoDeleteManyArgs>(args?: SelectSubset<T, TamanhoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tamanhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TamanhoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tamanhos
     * const tamanho = await prisma.tamanho.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TamanhoUpdateManyArgs>(args: SelectSubset<T, TamanhoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tamanhos and returns the data updated in the database.
     * @param {TamanhoUpdateManyAndReturnArgs} args - Arguments to update many Tamanhos.
     * @example
     * // Update many Tamanhos
     * const tamanho = await prisma.tamanho.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tamanhos and only return the `id`
     * const tamanhoWithIdOnly = await prisma.tamanho.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TamanhoUpdateManyAndReturnArgs>(args: SelectSubset<T, TamanhoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TamanhoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tamanho.
     * @param {TamanhoUpsertArgs} args - Arguments to update or create a Tamanho.
     * @example
     * // Update or create a Tamanho
     * const tamanho = await prisma.tamanho.upsert({
     *   create: {
     *     // ... data to create a Tamanho
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tamanho we want to update
     *   }
     * })
     */
    upsert<T extends TamanhoUpsertArgs>(args: SelectSubset<T, TamanhoUpsertArgs<ExtArgs>>): Prisma__TamanhoClient<$Result.GetResult<Prisma.$TamanhoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tamanhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TamanhoCountArgs} args - Arguments to filter Tamanhos to count.
     * @example
     * // Count the number of Tamanhos
     * const count = await prisma.tamanho.count({
     *   where: {
     *     // ... the filter for the Tamanhos we want to count
     *   }
     * })
    **/
    count<T extends TamanhoCountArgs>(
      args?: Subset<T, TamanhoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TamanhoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tamanho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TamanhoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TamanhoAggregateArgs>(args: Subset<T, TamanhoAggregateArgs>): Prisma.PrismaPromise<GetTamanhoAggregateType<T>>

    /**
     * Group by Tamanho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TamanhoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TamanhoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TamanhoGroupByArgs['orderBy'] }
        : { orderBy?: TamanhoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TamanhoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTamanhoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tamanho model
   */
  readonly fields: TamanhoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tamanho.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TamanhoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipo<T extends TipoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoDefaultArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itens<T extends Tamanho$itensArgs<ExtArgs> = {}>(args?: Subset<T, Tamanho$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tamanho model
   */
  interface TamanhoFieldRefs {
    readonly id: FieldRef<"Tamanho", 'Int'>
    readonly descricao: FieldRef<"Tamanho", 'String'>
    readonly tipoId: FieldRef<"Tamanho", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Tamanho findUnique
   */
  export type TamanhoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tamanho
     */
    select?: TamanhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tamanho
     */
    omit?: TamanhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TamanhoInclude<ExtArgs> | null
    /**
     * Filter, which Tamanho to fetch.
     */
    where: TamanhoWhereUniqueInput
  }

  /**
   * Tamanho findUniqueOrThrow
   */
  export type TamanhoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tamanho
     */
    select?: TamanhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tamanho
     */
    omit?: TamanhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TamanhoInclude<ExtArgs> | null
    /**
     * Filter, which Tamanho to fetch.
     */
    where: TamanhoWhereUniqueInput
  }

  /**
   * Tamanho findFirst
   */
  export type TamanhoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tamanho
     */
    select?: TamanhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tamanho
     */
    omit?: TamanhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TamanhoInclude<ExtArgs> | null
    /**
     * Filter, which Tamanho to fetch.
     */
    where?: TamanhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tamanhos to fetch.
     */
    orderBy?: TamanhoOrderByWithRelationInput | TamanhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tamanhos.
     */
    cursor?: TamanhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tamanhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tamanhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tamanhos.
     */
    distinct?: TamanhoScalarFieldEnum | TamanhoScalarFieldEnum[]
  }

  /**
   * Tamanho findFirstOrThrow
   */
  export type TamanhoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tamanho
     */
    select?: TamanhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tamanho
     */
    omit?: TamanhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TamanhoInclude<ExtArgs> | null
    /**
     * Filter, which Tamanho to fetch.
     */
    where?: TamanhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tamanhos to fetch.
     */
    orderBy?: TamanhoOrderByWithRelationInput | TamanhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tamanhos.
     */
    cursor?: TamanhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tamanhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tamanhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tamanhos.
     */
    distinct?: TamanhoScalarFieldEnum | TamanhoScalarFieldEnum[]
  }

  /**
   * Tamanho findMany
   */
  export type TamanhoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tamanho
     */
    select?: TamanhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tamanho
     */
    omit?: TamanhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TamanhoInclude<ExtArgs> | null
    /**
     * Filter, which Tamanhos to fetch.
     */
    where?: TamanhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tamanhos to fetch.
     */
    orderBy?: TamanhoOrderByWithRelationInput | TamanhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tamanhos.
     */
    cursor?: TamanhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tamanhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tamanhos.
     */
    skip?: number
    distinct?: TamanhoScalarFieldEnum | TamanhoScalarFieldEnum[]
  }

  /**
   * Tamanho create
   */
  export type TamanhoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tamanho
     */
    select?: TamanhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tamanho
     */
    omit?: TamanhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TamanhoInclude<ExtArgs> | null
    /**
     * The data needed to create a Tamanho.
     */
    data: XOR<TamanhoCreateInput, TamanhoUncheckedCreateInput>
  }

  /**
   * Tamanho createMany
   */
  export type TamanhoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tamanhos.
     */
    data: TamanhoCreateManyInput | TamanhoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tamanho createManyAndReturn
   */
  export type TamanhoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tamanho
     */
    select?: TamanhoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tamanho
     */
    omit?: TamanhoOmit<ExtArgs> | null
    /**
     * The data used to create many Tamanhos.
     */
    data: TamanhoCreateManyInput | TamanhoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TamanhoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tamanho update
   */
  export type TamanhoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tamanho
     */
    select?: TamanhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tamanho
     */
    omit?: TamanhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TamanhoInclude<ExtArgs> | null
    /**
     * The data needed to update a Tamanho.
     */
    data: XOR<TamanhoUpdateInput, TamanhoUncheckedUpdateInput>
    /**
     * Choose, which Tamanho to update.
     */
    where: TamanhoWhereUniqueInput
  }

  /**
   * Tamanho updateMany
   */
  export type TamanhoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tamanhos.
     */
    data: XOR<TamanhoUpdateManyMutationInput, TamanhoUncheckedUpdateManyInput>
    /**
     * Filter which Tamanhos to update
     */
    where?: TamanhoWhereInput
    /**
     * Limit how many Tamanhos to update.
     */
    limit?: number
  }

  /**
   * Tamanho updateManyAndReturn
   */
  export type TamanhoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tamanho
     */
    select?: TamanhoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tamanho
     */
    omit?: TamanhoOmit<ExtArgs> | null
    /**
     * The data used to update Tamanhos.
     */
    data: XOR<TamanhoUpdateManyMutationInput, TamanhoUncheckedUpdateManyInput>
    /**
     * Filter which Tamanhos to update
     */
    where?: TamanhoWhereInput
    /**
     * Limit how many Tamanhos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TamanhoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tamanho upsert
   */
  export type TamanhoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tamanho
     */
    select?: TamanhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tamanho
     */
    omit?: TamanhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TamanhoInclude<ExtArgs> | null
    /**
     * The filter to search for the Tamanho to update in case it exists.
     */
    where: TamanhoWhereUniqueInput
    /**
     * In case the Tamanho found by the `where` argument doesn't exist, create a new Tamanho with this data.
     */
    create: XOR<TamanhoCreateInput, TamanhoUncheckedCreateInput>
    /**
     * In case the Tamanho was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TamanhoUpdateInput, TamanhoUncheckedUpdateInput>
  }

  /**
   * Tamanho delete
   */
  export type TamanhoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tamanho
     */
    select?: TamanhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tamanho
     */
    omit?: TamanhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TamanhoInclude<ExtArgs> | null
    /**
     * Filter which Tamanho to delete.
     */
    where: TamanhoWhereUniqueInput
  }

  /**
   * Tamanho deleteMany
   */
  export type TamanhoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tamanhos to delete
     */
    where?: TamanhoWhereInput
    /**
     * Limit how many Tamanhos to delete.
     */
    limit?: number
  }

  /**
   * Tamanho.itens
   */
  export type Tamanho$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Tamanho without action
   */
  export type TamanhoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tamanho
     */
    select?: TamanhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tamanho
     */
    omit?: TamanhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TamanhoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VoluntarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    endereco: 'endereco',
    telefone: 'telefone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VoluntarioScalarFieldEnum = (typeof VoluntarioScalarFieldEnum)[keyof typeof VoluntarioScalarFieldEnum]


  export const BeneficiarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cpf: 'cpf',
    telefone: 'telefone',
    endereco: 'endereco',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BeneficiarioScalarFieldEnum = (typeof BeneficiarioScalarFieldEnum)[keyof typeof BeneficiarioScalarFieldEnum]


  export const DoacaoScalarFieldEnum: {
    id: 'id',
    data: 'data',
    voluntarioId: 'voluntarioId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DoacaoScalarFieldEnum = (typeof DoacaoScalarFieldEnum)[keyof typeof DoacaoScalarFieldEnum]


  export const ItemDoacaoScalarFieldEnum: {
    id: 'id',
    quantidade: 'quantidade',
    doacaoId: 'doacaoId',
    itemId: 'itemId'
  };

  export type ItemDoacaoScalarFieldEnum = (typeof ItemDoacaoScalarFieldEnum)[keyof typeof ItemDoacaoScalarFieldEnum]


  export const DistribuicaoScalarFieldEnum: {
    id: 'id',
    data: 'data',
    voluntarioId: 'voluntarioId',
    beneficiarioId: 'beneficiarioId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DistribuicaoScalarFieldEnum = (typeof DistribuicaoScalarFieldEnum)[keyof typeof DistribuicaoScalarFieldEnum]


  export const ItemDistribuicaoScalarFieldEnum: {
    id: 'id',
    quantidade: 'quantidade',
    distribuicaoId: 'distribuicaoId',
    itemId: 'itemId'
  };

  export type ItemDistribuicaoScalarFieldEnum = (typeof ItemDistribuicaoScalarFieldEnum)[keyof typeof ItemDistribuicaoScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    quantidadeEstoque: 'quantidadeEstoque',
    tipoId: 'tipoId',
    tamanhoId: 'tamanhoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const TipoScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao'
  };

  export type TipoScalarFieldEnum = (typeof TipoScalarFieldEnum)[keyof typeof TipoScalarFieldEnum]


  export const TamanhoScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    tipoId: 'tipoId'
  };

  export type TamanhoScalarFieldEnum = (typeof TamanhoScalarFieldEnum)[keyof typeof TamanhoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type VoluntarioWhereInput = {
    AND?: VoluntarioWhereInput | VoluntarioWhereInput[]
    OR?: VoluntarioWhereInput[]
    NOT?: VoluntarioWhereInput | VoluntarioWhereInput[]
    id?: IntFilter<"Voluntario"> | number
    nome?: StringFilter<"Voluntario"> | string
    email?: StringFilter<"Voluntario"> | string
    senha?: StringFilter<"Voluntario"> | string
    endereco?: StringNullableFilter<"Voluntario"> | string | null
    telefone?: StringNullableFilter<"Voluntario"> | string | null
    createdAt?: DateTimeFilter<"Voluntario"> | Date | string
    updatedAt?: DateTimeFilter<"Voluntario"> | Date | string
    doacoes?: DoacaoListRelationFilter
    distribuicoes?: DistribuicaoListRelationFilter
  }

  export type VoluntarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    endereco?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doacoes?: DoacaoOrderByRelationAggregateInput
    distribuicoes?: DistribuicaoOrderByRelationAggregateInput
  }

  export type VoluntarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: VoluntarioWhereInput | VoluntarioWhereInput[]
    OR?: VoluntarioWhereInput[]
    NOT?: VoluntarioWhereInput | VoluntarioWhereInput[]
    nome?: StringFilter<"Voluntario"> | string
    senha?: StringFilter<"Voluntario"> | string
    endereco?: StringNullableFilter<"Voluntario"> | string | null
    telefone?: StringNullableFilter<"Voluntario"> | string | null
    createdAt?: DateTimeFilter<"Voluntario"> | Date | string
    updatedAt?: DateTimeFilter<"Voluntario"> | Date | string
    doacoes?: DoacaoListRelationFilter
    distribuicoes?: DistribuicaoListRelationFilter
  }, "id" | "email">

  export type VoluntarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    endereco?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VoluntarioCountOrderByAggregateInput
    _avg?: VoluntarioAvgOrderByAggregateInput
    _max?: VoluntarioMaxOrderByAggregateInput
    _min?: VoluntarioMinOrderByAggregateInput
    _sum?: VoluntarioSumOrderByAggregateInput
  }

  export type VoluntarioScalarWhereWithAggregatesInput = {
    AND?: VoluntarioScalarWhereWithAggregatesInput | VoluntarioScalarWhereWithAggregatesInput[]
    OR?: VoluntarioScalarWhereWithAggregatesInput[]
    NOT?: VoluntarioScalarWhereWithAggregatesInput | VoluntarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Voluntario"> | number
    nome?: StringWithAggregatesFilter<"Voluntario"> | string
    email?: StringWithAggregatesFilter<"Voluntario"> | string
    senha?: StringWithAggregatesFilter<"Voluntario"> | string
    endereco?: StringNullableWithAggregatesFilter<"Voluntario"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"Voluntario"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Voluntario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Voluntario"> | Date | string
  }

  export type BeneficiarioWhereInput = {
    AND?: BeneficiarioWhereInput | BeneficiarioWhereInput[]
    OR?: BeneficiarioWhereInput[]
    NOT?: BeneficiarioWhereInput | BeneficiarioWhereInput[]
    id?: IntFilter<"Beneficiario"> | number
    nome?: StringFilter<"Beneficiario"> | string
    cpf?: StringFilter<"Beneficiario"> | string
    telefone?: StringNullableFilter<"Beneficiario"> | string | null
    endereco?: StringNullableFilter<"Beneficiario"> | string | null
    createdAt?: DateTimeFilter<"Beneficiario"> | Date | string
    updatedAt?: DateTimeFilter<"Beneficiario"> | Date | string
    distribuicoes?: DistribuicaoListRelationFilter
  }

  export type BeneficiarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    distribuicoes?: DistribuicaoOrderByRelationAggregateInput
  }

  export type BeneficiarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cpf?: string
    AND?: BeneficiarioWhereInput | BeneficiarioWhereInput[]
    OR?: BeneficiarioWhereInput[]
    NOT?: BeneficiarioWhereInput | BeneficiarioWhereInput[]
    nome?: StringFilter<"Beneficiario"> | string
    telefone?: StringNullableFilter<"Beneficiario"> | string | null
    endereco?: StringNullableFilter<"Beneficiario"> | string | null
    createdAt?: DateTimeFilter<"Beneficiario"> | Date | string
    updatedAt?: DateTimeFilter<"Beneficiario"> | Date | string
    distribuicoes?: DistribuicaoListRelationFilter
  }, "id" | "cpf">

  export type BeneficiarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BeneficiarioCountOrderByAggregateInput
    _avg?: BeneficiarioAvgOrderByAggregateInput
    _max?: BeneficiarioMaxOrderByAggregateInput
    _min?: BeneficiarioMinOrderByAggregateInput
    _sum?: BeneficiarioSumOrderByAggregateInput
  }

  export type BeneficiarioScalarWhereWithAggregatesInput = {
    AND?: BeneficiarioScalarWhereWithAggregatesInput | BeneficiarioScalarWhereWithAggregatesInput[]
    OR?: BeneficiarioScalarWhereWithAggregatesInput[]
    NOT?: BeneficiarioScalarWhereWithAggregatesInput | BeneficiarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Beneficiario"> | number
    nome?: StringWithAggregatesFilter<"Beneficiario"> | string
    cpf?: StringWithAggregatesFilter<"Beneficiario"> | string
    telefone?: StringNullableWithAggregatesFilter<"Beneficiario"> | string | null
    endereco?: StringNullableWithAggregatesFilter<"Beneficiario"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Beneficiario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Beneficiario"> | Date | string
  }

  export type DoacaoWhereInput = {
    AND?: DoacaoWhereInput | DoacaoWhereInput[]
    OR?: DoacaoWhereInput[]
    NOT?: DoacaoWhereInput | DoacaoWhereInput[]
    id?: IntFilter<"Doacao"> | number
    data?: DateTimeFilter<"Doacao"> | Date | string
    voluntarioId?: IntFilter<"Doacao"> | number
    createdAt?: DateTimeFilter<"Doacao"> | Date | string
    updatedAt?: DateTimeFilter<"Doacao"> | Date | string
    voluntario?: XOR<VoluntarioScalarRelationFilter, VoluntarioWhereInput>
    itens?: ItemDoacaoListRelationFilter
  }

  export type DoacaoOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    voluntarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    voluntario?: VoluntarioOrderByWithRelationInput
    itens?: ItemDoacaoOrderByRelationAggregateInput
  }

  export type DoacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DoacaoWhereInput | DoacaoWhereInput[]
    OR?: DoacaoWhereInput[]
    NOT?: DoacaoWhereInput | DoacaoWhereInput[]
    data?: DateTimeFilter<"Doacao"> | Date | string
    voluntarioId?: IntFilter<"Doacao"> | number
    createdAt?: DateTimeFilter<"Doacao"> | Date | string
    updatedAt?: DateTimeFilter<"Doacao"> | Date | string
    voluntario?: XOR<VoluntarioScalarRelationFilter, VoluntarioWhereInput>
    itens?: ItemDoacaoListRelationFilter
  }, "id">

  export type DoacaoOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    voluntarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DoacaoCountOrderByAggregateInput
    _avg?: DoacaoAvgOrderByAggregateInput
    _max?: DoacaoMaxOrderByAggregateInput
    _min?: DoacaoMinOrderByAggregateInput
    _sum?: DoacaoSumOrderByAggregateInput
  }

  export type DoacaoScalarWhereWithAggregatesInput = {
    AND?: DoacaoScalarWhereWithAggregatesInput | DoacaoScalarWhereWithAggregatesInput[]
    OR?: DoacaoScalarWhereWithAggregatesInput[]
    NOT?: DoacaoScalarWhereWithAggregatesInput | DoacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Doacao"> | number
    data?: DateTimeWithAggregatesFilter<"Doacao"> | Date | string
    voluntarioId?: IntWithAggregatesFilter<"Doacao"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Doacao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Doacao"> | Date | string
  }

  export type ItemDoacaoWhereInput = {
    AND?: ItemDoacaoWhereInput | ItemDoacaoWhereInput[]
    OR?: ItemDoacaoWhereInput[]
    NOT?: ItemDoacaoWhereInput | ItemDoacaoWhereInput[]
    id?: IntFilter<"ItemDoacao"> | number
    quantidade?: IntFilter<"ItemDoacao"> | number
    doacaoId?: IntFilter<"ItemDoacao"> | number
    itemId?: IntFilter<"ItemDoacao"> | number
    doacao?: XOR<DoacaoScalarRelationFilter, DoacaoWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type ItemDoacaoOrderByWithRelationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    doacaoId?: SortOrder
    itemId?: SortOrder
    doacao?: DoacaoOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
  }

  export type ItemDoacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemDoacaoWhereInput | ItemDoacaoWhereInput[]
    OR?: ItemDoacaoWhereInput[]
    NOT?: ItemDoacaoWhereInput | ItemDoacaoWhereInput[]
    quantidade?: IntFilter<"ItemDoacao"> | number
    doacaoId?: IntFilter<"ItemDoacao"> | number
    itemId?: IntFilter<"ItemDoacao"> | number
    doacao?: XOR<DoacaoScalarRelationFilter, DoacaoWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "id">

  export type ItemDoacaoOrderByWithAggregationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    doacaoId?: SortOrder
    itemId?: SortOrder
    _count?: ItemDoacaoCountOrderByAggregateInput
    _avg?: ItemDoacaoAvgOrderByAggregateInput
    _max?: ItemDoacaoMaxOrderByAggregateInput
    _min?: ItemDoacaoMinOrderByAggregateInput
    _sum?: ItemDoacaoSumOrderByAggregateInput
  }

  export type ItemDoacaoScalarWhereWithAggregatesInput = {
    AND?: ItemDoacaoScalarWhereWithAggregatesInput | ItemDoacaoScalarWhereWithAggregatesInput[]
    OR?: ItemDoacaoScalarWhereWithAggregatesInput[]
    NOT?: ItemDoacaoScalarWhereWithAggregatesInput | ItemDoacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemDoacao"> | number
    quantidade?: IntWithAggregatesFilter<"ItemDoacao"> | number
    doacaoId?: IntWithAggregatesFilter<"ItemDoacao"> | number
    itemId?: IntWithAggregatesFilter<"ItemDoacao"> | number
  }

  export type DistribuicaoWhereInput = {
    AND?: DistribuicaoWhereInput | DistribuicaoWhereInput[]
    OR?: DistribuicaoWhereInput[]
    NOT?: DistribuicaoWhereInput | DistribuicaoWhereInput[]
    id?: IntFilter<"Distribuicao"> | number
    data?: DateTimeFilter<"Distribuicao"> | Date | string
    voluntarioId?: IntFilter<"Distribuicao"> | number
    beneficiarioId?: IntFilter<"Distribuicao"> | number
    createdAt?: DateTimeFilter<"Distribuicao"> | Date | string
    updatedAt?: DateTimeFilter<"Distribuicao"> | Date | string
    voluntario?: XOR<VoluntarioScalarRelationFilter, VoluntarioWhereInput>
    beneficiario?: XOR<BeneficiarioScalarRelationFilter, BeneficiarioWhereInput>
    itens?: ItemDistribuicaoListRelationFilter
  }

  export type DistribuicaoOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    voluntarioId?: SortOrder
    beneficiarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    voluntario?: VoluntarioOrderByWithRelationInput
    beneficiario?: BeneficiarioOrderByWithRelationInput
    itens?: ItemDistribuicaoOrderByRelationAggregateInput
  }

  export type DistribuicaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DistribuicaoWhereInput | DistribuicaoWhereInput[]
    OR?: DistribuicaoWhereInput[]
    NOT?: DistribuicaoWhereInput | DistribuicaoWhereInput[]
    data?: DateTimeFilter<"Distribuicao"> | Date | string
    voluntarioId?: IntFilter<"Distribuicao"> | number
    beneficiarioId?: IntFilter<"Distribuicao"> | number
    createdAt?: DateTimeFilter<"Distribuicao"> | Date | string
    updatedAt?: DateTimeFilter<"Distribuicao"> | Date | string
    voluntario?: XOR<VoluntarioScalarRelationFilter, VoluntarioWhereInput>
    beneficiario?: XOR<BeneficiarioScalarRelationFilter, BeneficiarioWhereInput>
    itens?: ItemDistribuicaoListRelationFilter
  }, "id">

  export type DistribuicaoOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    voluntarioId?: SortOrder
    beneficiarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DistribuicaoCountOrderByAggregateInput
    _avg?: DistribuicaoAvgOrderByAggregateInput
    _max?: DistribuicaoMaxOrderByAggregateInput
    _min?: DistribuicaoMinOrderByAggregateInput
    _sum?: DistribuicaoSumOrderByAggregateInput
  }

  export type DistribuicaoScalarWhereWithAggregatesInput = {
    AND?: DistribuicaoScalarWhereWithAggregatesInput | DistribuicaoScalarWhereWithAggregatesInput[]
    OR?: DistribuicaoScalarWhereWithAggregatesInput[]
    NOT?: DistribuicaoScalarWhereWithAggregatesInput | DistribuicaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Distribuicao"> | number
    data?: DateTimeWithAggregatesFilter<"Distribuicao"> | Date | string
    voluntarioId?: IntWithAggregatesFilter<"Distribuicao"> | number
    beneficiarioId?: IntWithAggregatesFilter<"Distribuicao"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Distribuicao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Distribuicao"> | Date | string
  }

  export type ItemDistribuicaoWhereInput = {
    AND?: ItemDistribuicaoWhereInput | ItemDistribuicaoWhereInput[]
    OR?: ItemDistribuicaoWhereInput[]
    NOT?: ItemDistribuicaoWhereInput | ItemDistribuicaoWhereInput[]
    id?: IntFilter<"ItemDistribuicao"> | number
    quantidade?: IntFilter<"ItemDistribuicao"> | number
    distribuicaoId?: IntFilter<"ItemDistribuicao"> | number
    itemId?: IntFilter<"ItemDistribuicao"> | number
    distribuicao?: XOR<DistribuicaoScalarRelationFilter, DistribuicaoWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type ItemDistribuicaoOrderByWithRelationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    distribuicaoId?: SortOrder
    itemId?: SortOrder
    distribuicao?: DistribuicaoOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
  }

  export type ItemDistribuicaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemDistribuicaoWhereInput | ItemDistribuicaoWhereInput[]
    OR?: ItemDistribuicaoWhereInput[]
    NOT?: ItemDistribuicaoWhereInput | ItemDistribuicaoWhereInput[]
    quantidade?: IntFilter<"ItemDistribuicao"> | number
    distribuicaoId?: IntFilter<"ItemDistribuicao"> | number
    itemId?: IntFilter<"ItemDistribuicao"> | number
    distribuicao?: XOR<DistribuicaoScalarRelationFilter, DistribuicaoWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "id">

  export type ItemDistribuicaoOrderByWithAggregationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    distribuicaoId?: SortOrder
    itemId?: SortOrder
    _count?: ItemDistribuicaoCountOrderByAggregateInput
    _avg?: ItemDistribuicaoAvgOrderByAggregateInput
    _max?: ItemDistribuicaoMaxOrderByAggregateInput
    _min?: ItemDistribuicaoMinOrderByAggregateInput
    _sum?: ItemDistribuicaoSumOrderByAggregateInput
  }

  export type ItemDistribuicaoScalarWhereWithAggregatesInput = {
    AND?: ItemDistribuicaoScalarWhereWithAggregatesInput | ItemDistribuicaoScalarWhereWithAggregatesInput[]
    OR?: ItemDistribuicaoScalarWhereWithAggregatesInput[]
    NOT?: ItemDistribuicaoScalarWhereWithAggregatesInput | ItemDistribuicaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemDistribuicao"> | number
    quantidade?: IntWithAggregatesFilter<"ItemDistribuicao"> | number
    distribuicaoId?: IntWithAggregatesFilter<"ItemDistribuicao"> | number
    itemId?: IntWithAggregatesFilter<"ItemDistribuicao"> | number
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: IntFilter<"Item"> | number
    quantidadeEstoque?: IntFilter<"Item"> | number
    tipoId?: IntFilter<"Item"> | number
    tamanhoId?: IntFilter<"Item"> | number
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    tipo?: XOR<TipoScalarRelationFilter, TipoWhereInput>
    tamanho?: XOR<TamanhoScalarRelationFilter, TamanhoWhereInput>
    entradas?: ItemDoacaoListRelationFilter
    saidas?: ItemDistribuicaoListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    quantidadeEstoque?: SortOrder
    tipoId?: SortOrder
    tamanhoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tipo?: TipoOrderByWithRelationInput
    tamanho?: TamanhoOrderByWithRelationInput
    entradas?: ItemDoacaoOrderByRelationAggregateInput
    saidas?: ItemDistribuicaoOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    quantidadeEstoque?: IntFilter<"Item"> | number
    tipoId?: IntFilter<"Item"> | number
    tamanhoId?: IntFilter<"Item"> | number
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    tipo?: XOR<TipoScalarRelationFilter, TipoWhereInput>
    tamanho?: XOR<TamanhoScalarRelationFilter, TamanhoWhereInput>
    entradas?: ItemDoacaoListRelationFilter
    saidas?: ItemDistribuicaoListRelationFilter
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    quantidadeEstoque?: SortOrder
    tipoId?: SortOrder
    tamanhoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Item"> | number
    quantidadeEstoque?: IntWithAggregatesFilter<"Item"> | number
    tipoId?: IntWithAggregatesFilter<"Item"> | number
    tamanhoId?: IntWithAggregatesFilter<"Item"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
  }

  export type TipoWhereInput = {
    AND?: TipoWhereInput | TipoWhereInput[]
    OR?: TipoWhereInput[]
    NOT?: TipoWhereInput | TipoWhereInput[]
    id?: IntFilter<"Tipo"> | number
    descricao?: StringFilter<"Tipo"> | string
    tamanhos?: TamanhoListRelationFilter
    itens?: ItemListRelationFilter
  }

  export type TipoOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    tamanhos?: TamanhoOrderByRelationAggregateInput
    itens?: ItemOrderByRelationAggregateInput
  }

  export type TipoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    descricao?: string
    AND?: TipoWhereInput | TipoWhereInput[]
    OR?: TipoWhereInput[]
    NOT?: TipoWhereInput | TipoWhereInput[]
    tamanhos?: TamanhoListRelationFilter
    itens?: ItemListRelationFilter
  }, "id" | "descricao">

  export type TipoOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    _count?: TipoCountOrderByAggregateInput
    _avg?: TipoAvgOrderByAggregateInput
    _max?: TipoMaxOrderByAggregateInput
    _min?: TipoMinOrderByAggregateInput
    _sum?: TipoSumOrderByAggregateInput
  }

  export type TipoScalarWhereWithAggregatesInput = {
    AND?: TipoScalarWhereWithAggregatesInput | TipoScalarWhereWithAggregatesInput[]
    OR?: TipoScalarWhereWithAggregatesInput[]
    NOT?: TipoScalarWhereWithAggregatesInput | TipoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tipo"> | number
    descricao?: StringWithAggregatesFilter<"Tipo"> | string
  }

  export type TamanhoWhereInput = {
    AND?: TamanhoWhereInput | TamanhoWhereInput[]
    OR?: TamanhoWhereInput[]
    NOT?: TamanhoWhereInput | TamanhoWhereInput[]
    id?: IntFilter<"Tamanho"> | number
    descricao?: StringFilter<"Tamanho"> | string
    tipoId?: IntFilter<"Tamanho"> | number
    tipo?: XOR<TipoScalarRelationFilter, TipoWhereInput>
    itens?: ItemListRelationFilter
  }

  export type TamanhoOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    tipoId?: SortOrder
    tipo?: TipoOrderByWithRelationInput
    itens?: ItemOrderByRelationAggregateInput
  }

  export type TamanhoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    descricao_tipoId?: TamanhoDescricaoTipoIdCompoundUniqueInput
    AND?: TamanhoWhereInput | TamanhoWhereInput[]
    OR?: TamanhoWhereInput[]
    NOT?: TamanhoWhereInput | TamanhoWhereInput[]
    descricao?: StringFilter<"Tamanho"> | string
    tipoId?: IntFilter<"Tamanho"> | number
    tipo?: XOR<TipoScalarRelationFilter, TipoWhereInput>
    itens?: ItemListRelationFilter
  }, "id" | "descricao_tipoId">

  export type TamanhoOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    tipoId?: SortOrder
    _count?: TamanhoCountOrderByAggregateInput
    _avg?: TamanhoAvgOrderByAggregateInput
    _max?: TamanhoMaxOrderByAggregateInput
    _min?: TamanhoMinOrderByAggregateInput
    _sum?: TamanhoSumOrderByAggregateInput
  }

  export type TamanhoScalarWhereWithAggregatesInput = {
    AND?: TamanhoScalarWhereWithAggregatesInput | TamanhoScalarWhereWithAggregatesInput[]
    OR?: TamanhoScalarWhereWithAggregatesInput[]
    NOT?: TamanhoScalarWhereWithAggregatesInput | TamanhoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tamanho"> | number
    descricao?: StringWithAggregatesFilter<"Tamanho"> | string
    tipoId?: IntWithAggregatesFilter<"Tamanho"> | number
  }

  export type VoluntarioCreateInput = {
    nome: string
    email: string
    senha: string
    endereco?: string | null
    telefone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doacoes?: DoacaoCreateNestedManyWithoutVoluntarioInput
    distribuicoes?: DistribuicaoCreateNestedManyWithoutVoluntarioInput
  }

  export type VoluntarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    endereco?: string | null
    telefone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doacoes?: DoacaoUncheckedCreateNestedManyWithoutVoluntarioInput
    distribuicoes?: DistribuicaoUncheckedCreateNestedManyWithoutVoluntarioInput
  }

  export type VoluntarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doacoes?: DoacaoUpdateManyWithoutVoluntarioNestedInput
    distribuicoes?: DistribuicaoUpdateManyWithoutVoluntarioNestedInput
  }

  export type VoluntarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doacoes?: DoacaoUncheckedUpdateManyWithoutVoluntarioNestedInput
    distribuicoes?: DistribuicaoUncheckedUpdateManyWithoutVoluntarioNestedInput
  }

  export type VoluntarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    endereco?: string | null
    telefone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoluntarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoluntarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeneficiarioCreateInput = {
    nome: string
    cpf: string
    telefone?: string | null
    endereco?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    distribuicoes?: DistribuicaoCreateNestedManyWithoutBeneficiarioInput
  }

  export type BeneficiarioUncheckedCreateInput = {
    id?: number
    nome: string
    cpf: string
    telefone?: string | null
    endereco?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    distribuicoes?: DistribuicaoUncheckedCreateNestedManyWithoutBeneficiarioInput
  }

  export type BeneficiarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distribuicoes?: DistribuicaoUpdateManyWithoutBeneficiarioNestedInput
  }

  export type BeneficiarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distribuicoes?: DistribuicaoUncheckedUpdateManyWithoutBeneficiarioNestedInput
  }

  export type BeneficiarioCreateManyInput = {
    id?: number
    nome: string
    cpf: string
    telefone?: string | null
    endereco?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BeneficiarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeneficiarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoacaoCreateInput = {
    data?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    voluntario: VoluntarioCreateNestedOneWithoutDoacoesInput
    itens?: ItemDoacaoCreateNestedManyWithoutDoacaoInput
  }

  export type DoacaoUncheckedCreateInput = {
    id?: number
    data?: Date | string
    voluntarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itens?: ItemDoacaoUncheckedCreateNestedManyWithoutDoacaoInput
  }

  export type DoacaoUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voluntario?: VoluntarioUpdateOneRequiredWithoutDoacoesNestedInput
    itens?: ItemDoacaoUpdateManyWithoutDoacaoNestedInput
  }

  export type DoacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    voluntarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemDoacaoUncheckedUpdateManyWithoutDoacaoNestedInput
  }

  export type DoacaoCreateManyInput = {
    id?: number
    data?: Date | string
    voluntarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoacaoUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    voluntarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemDoacaoCreateInput = {
    quantidade: number
    doacao: DoacaoCreateNestedOneWithoutItensInput
    item: ItemCreateNestedOneWithoutEntradasInput
  }

  export type ItemDoacaoUncheckedCreateInput = {
    id?: number
    quantidade: number
    doacaoId: number
    itemId: number
  }

  export type ItemDoacaoUpdateInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    doacao?: DoacaoUpdateOneRequiredWithoutItensNestedInput
    item?: ItemUpdateOneRequiredWithoutEntradasNestedInput
  }

  export type ItemDoacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    doacaoId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemDoacaoCreateManyInput = {
    id?: number
    quantidade: number
    doacaoId: number
    itemId: number
  }

  export type ItemDoacaoUpdateManyMutationInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type ItemDoacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    doacaoId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type DistribuicaoCreateInput = {
    data?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    voluntario: VoluntarioCreateNestedOneWithoutDistribuicoesInput
    beneficiario: BeneficiarioCreateNestedOneWithoutDistribuicoesInput
    itens?: ItemDistribuicaoCreateNestedManyWithoutDistribuicaoInput
  }

  export type DistribuicaoUncheckedCreateInput = {
    id?: number
    data?: Date | string
    voluntarioId: number
    beneficiarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itens?: ItemDistribuicaoUncheckedCreateNestedManyWithoutDistribuicaoInput
  }

  export type DistribuicaoUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voluntario?: VoluntarioUpdateOneRequiredWithoutDistribuicoesNestedInput
    beneficiario?: BeneficiarioUpdateOneRequiredWithoutDistribuicoesNestedInput
    itens?: ItemDistribuicaoUpdateManyWithoutDistribuicaoNestedInput
  }

  export type DistribuicaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    voluntarioId?: IntFieldUpdateOperationsInput | number
    beneficiarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemDistribuicaoUncheckedUpdateManyWithoutDistribuicaoNestedInput
  }

  export type DistribuicaoCreateManyInput = {
    id?: number
    data?: Date | string
    voluntarioId: number
    beneficiarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DistribuicaoUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistribuicaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    voluntarioId?: IntFieldUpdateOperationsInput | number
    beneficiarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemDistribuicaoCreateInput = {
    quantidade: number
    distribuicao: DistribuicaoCreateNestedOneWithoutItensInput
    item: ItemCreateNestedOneWithoutSaidasInput
  }

  export type ItemDistribuicaoUncheckedCreateInput = {
    id?: number
    quantidade: number
    distribuicaoId: number
    itemId: number
  }

  export type ItemDistribuicaoUpdateInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    distribuicao?: DistribuicaoUpdateOneRequiredWithoutItensNestedInput
    item?: ItemUpdateOneRequiredWithoutSaidasNestedInput
  }

  export type ItemDistribuicaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    distribuicaoId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemDistribuicaoCreateManyInput = {
    id?: number
    quantidade: number
    distribuicaoId: number
    itemId: number
  }

  export type ItemDistribuicaoUpdateManyMutationInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type ItemDistribuicaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    distribuicaoId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemCreateInput = {
    quantidadeEstoque: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tipo: TipoCreateNestedOneWithoutItensInput
    tamanho: TamanhoCreateNestedOneWithoutItensInput
    entradas?: ItemDoacaoCreateNestedManyWithoutItemInput
    saidas?: ItemDistribuicaoCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: number
    quantidadeEstoque: number
    tipoId: number
    tamanhoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    entradas?: ItemDoacaoUncheckedCreateNestedManyWithoutItemInput
    saidas?: ItemDistribuicaoUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    quantidadeEstoque?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: TipoUpdateOneRequiredWithoutItensNestedInput
    tamanho?: TamanhoUpdateOneRequiredWithoutItensNestedInput
    entradas?: ItemDoacaoUpdateManyWithoutItemNestedInput
    saidas?: ItemDistribuicaoUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidadeEstoque?: IntFieldUpdateOperationsInput | number
    tipoId?: IntFieldUpdateOperationsInput | number
    tamanhoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entradas?: ItemDoacaoUncheckedUpdateManyWithoutItemNestedInput
    saidas?: ItemDistribuicaoUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: number
    quantidadeEstoque: number
    tipoId: number
    tamanhoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateManyMutationInput = {
    quantidadeEstoque?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidadeEstoque?: IntFieldUpdateOperationsInput | number
    tipoId?: IntFieldUpdateOperationsInput | number
    tamanhoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoCreateInput = {
    descricao: string
    tamanhos?: TamanhoCreateNestedManyWithoutTipoInput
    itens?: ItemCreateNestedManyWithoutTipoInput
  }

  export type TipoUncheckedCreateInput = {
    id?: number
    descricao: string
    tamanhos?: TamanhoUncheckedCreateNestedManyWithoutTipoInput
    itens?: ItemUncheckedCreateNestedManyWithoutTipoInput
  }

  export type TipoUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    tamanhos?: TamanhoUpdateManyWithoutTipoNestedInput
    itens?: ItemUpdateManyWithoutTipoNestedInput
  }

  export type TipoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    tamanhos?: TamanhoUncheckedUpdateManyWithoutTipoNestedInput
    itens?: ItemUncheckedUpdateManyWithoutTipoNestedInput
  }

  export type TipoCreateManyInput = {
    id?: number
    descricao: string
  }

  export type TipoUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type TipoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type TamanhoCreateInput = {
    descricao: string
    tipo: TipoCreateNestedOneWithoutTamanhosInput
    itens?: ItemCreateNestedManyWithoutTamanhoInput
  }

  export type TamanhoUncheckedCreateInput = {
    id?: number
    descricao: string
    tipoId: number
    itens?: ItemUncheckedCreateNestedManyWithoutTamanhoInput
  }

  export type TamanhoUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: TipoUpdateOneRequiredWithoutTamanhosNestedInput
    itens?: ItemUpdateManyWithoutTamanhoNestedInput
  }

  export type TamanhoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    tipoId?: IntFieldUpdateOperationsInput | number
    itens?: ItemUncheckedUpdateManyWithoutTamanhoNestedInput
  }

  export type TamanhoCreateManyInput = {
    id?: number
    descricao: string
    tipoId: number
  }

  export type TamanhoUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type TamanhoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    tipoId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DoacaoListRelationFilter = {
    every?: DoacaoWhereInput
    some?: DoacaoWhereInput
    none?: DoacaoWhereInput
  }

  export type DistribuicaoListRelationFilter = {
    every?: DistribuicaoWhereInput
    some?: DistribuicaoWhereInput
    none?: DistribuicaoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DoacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DistribuicaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoluntarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VoluntarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VoluntarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VoluntarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VoluntarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BeneficiarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BeneficiarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BeneficiarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BeneficiarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    endereco?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BeneficiarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VoluntarioScalarRelationFilter = {
    is?: VoluntarioWhereInput
    isNot?: VoluntarioWhereInput
  }

  export type ItemDoacaoListRelationFilter = {
    every?: ItemDoacaoWhereInput
    some?: ItemDoacaoWhereInput
    none?: ItemDoacaoWhereInput
  }

  export type ItemDoacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoacaoCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    voluntarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    voluntarioId?: SortOrder
  }

  export type DoacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    voluntarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoacaoMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    voluntarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoacaoSumOrderByAggregateInput = {
    id?: SortOrder
    voluntarioId?: SortOrder
  }

  export type DoacaoScalarRelationFilter = {
    is?: DoacaoWhereInput
    isNot?: DoacaoWhereInput
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type ItemDoacaoCountOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    doacaoId?: SortOrder
    itemId?: SortOrder
  }

  export type ItemDoacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    doacaoId?: SortOrder
    itemId?: SortOrder
  }

  export type ItemDoacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    doacaoId?: SortOrder
    itemId?: SortOrder
  }

  export type ItemDoacaoMinOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    doacaoId?: SortOrder
    itemId?: SortOrder
  }

  export type ItemDoacaoSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    doacaoId?: SortOrder
    itemId?: SortOrder
  }

  export type BeneficiarioScalarRelationFilter = {
    is?: BeneficiarioWhereInput
    isNot?: BeneficiarioWhereInput
  }

  export type ItemDistribuicaoListRelationFilter = {
    every?: ItemDistribuicaoWhereInput
    some?: ItemDistribuicaoWhereInput
    none?: ItemDistribuicaoWhereInput
  }

  export type ItemDistribuicaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DistribuicaoCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    voluntarioId?: SortOrder
    beneficiarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DistribuicaoAvgOrderByAggregateInput = {
    id?: SortOrder
    voluntarioId?: SortOrder
    beneficiarioId?: SortOrder
  }

  export type DistribuicaoMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    voluntarioId?: SortOrder
    beneficiarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DistribuicaoMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    voluntarioId?: SortOrder
    beneficiarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DistribuicaoSumOrderByAggregateInput = {
    id?: SortOrder
    voluntarioId?: SortOrder
    beneficiarioId?: SortOrder
  }

  export type DistribuicaoScalarRelationFilter = {
    is?: DistribuicaoWhereInput
    isNot?: DistribuicaoWhereInput
  }

  export type ItemDistribuicaoCountOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    distribuicaoId?: SortOrder
    itemId?: SortOrder
  }

  export type ItemDistribuicaoAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    distribuicaoId?: SortOrder
    itemId?: SortOrder
  }

  export type ItemDistribuicaoMaxOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    distribuicaoId?: SortOrder
    itemId?: SortOrder
  }

  export type ItemDistribuicaoMinOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    distribuicaoId?: SortOrder
    itemId?: SortOrder
  }

  export type ItemDistribuicaoSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    distribuicaoId?: SortOrder
    itemId?: SortOrder
  }

  export type TipoScalarRelationFilter = {
    is?: TipoWhereInput
    isNot?: TipoWhereInput
  }

  export type TamanhoScalarRelationFilter = {
    is?: TamanhoWhereInput
    isNot?: TamanhoWhereInput
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    quantidadeEstoque?: SortOrder
    tipoId?: SortOrder
    tamanhoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidadeEstoque?: SortOrder
    tipoId?: SortOrder
    tamanhoId?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    quantidadeEstoque?: SortOrder
    tipoId?: SortOrder
    tamanhoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    quantidadeEstoque?: SortOrder
    tipoId?: SortOrder
    tamanhoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    id?: SortOrder
    quantidadeEstoque?: SortOrder
    tipoId?: SortOrder
    tamanhoId?: SortOrder
  }

  export type TamanhoListRelationFilter = {
    every?: TamanhoWhereInput
    some?: TamanhoWhereInput
    none?: TamanhoWhereInput
  }

  export type ItemListRelationFilter = {
    every?: ItemWhereInput
    some?: ItemWhereInput
    none?: ItemWhereInput
  }

  export type TamanhoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TipoCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type TipoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TipoMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type TipoMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type TipoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TamanhoDescricaoTipoIdCompoundUniqueInput = {
    descricao: string
    tipoId: number
  }

  export type TamanhoCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    tipoId?: SortOrder
  }

  export type TamanhoAvgOrderByAggregateInput = {
    id?: SortOrder
    tipoId?: SortOrder
  }

  export type TamanhoMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    tipoId?: SortOrder
  }

  export type TamanhoMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    tipoId?: SortOrder
  }

  export type TamanhoSumOrderByAggregateInput = {
    id?: SortOrder
    tipoId?: SortOrder
  }

  export type DoacaoCreateNestedManyWithoutVoluntarioInput = {
    create?: XOR<DoacaoCreateWithoutVoluntarioInput, DoacaoUncheckedCreateWithoutVoluntarioInput> | DoacaoCreateWithoutVoluntarioInput[] | DoacaoUncheckedCreateWithoutVoluntarioInput[]
    connectOrCreate?: DoacaoCreateOrConnectWithoutVoluntarioInput | DoacaoCreateOrConnectWithoutVoluntarioInput[]
    createMany?: DoacaoCreateManyVoluntarioInputEnvelope
    connect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
  }

  export type DistribuicaoCreateNestedManyWithoutVoluntarioInput = {
    create?: XOR<DistribuicaoCreateWithoutVoluntarioInput, DistribuicaoUncheckedCreateWithoutVoluntarioInput> | DistribuicaoCreateWithoutVoluntarioInput[] | DistribuicaoUncheckedCreateWithoutVoluntarioInput[]
    connectOrCreate?: DistribuicaoCreateOrConnectWithoutVoluntarioInput | DistribuicaoCreateOrConnectWithoutVoluntarioInput[]
    createMany?: DistribuicaoCreateManyVoluntarioInputEnvelope
    connect?: DistribuicaoWhereUniqueInput | DistribuicaoWhereUniqueInput[]
  }

  export type DoacaoUncheckedCreateNestedManyWithoutVoluntarioInput = {
    create?: XOR<DoacaoCreateWithoutVoluntarioInput, DoacaoUncheckedCreateWithoutVoluntarioInput> | DoacaoCreateWithoutVoluntarioInput[] | DoacaoUncheckedCreateWithoutVoluntarioInput[]
    connectOrCreate?: DoacaoCreateOrConnectWithoutVoluntarioInput | DoacaoCreateOrConnectWithoutVoluntarioInput[]
    createMany?: DoacaoCreateManyVoluntarioInputEnvelope
    connect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
  }

  export type DistribuicaoUncheckedCreateNestedManyWithoutVoluntarioInput = {
    create?: XOR<DistribuicaoCreateWithoutVoluntarioInput, DistribuicaoUncheckedCreateWithoutVoluntarioInput> | DistribuicaoCreateWithoutVoluntarioInput[] | DistribuicaoUncheckedCreateWithoutVoluntarioInput[]
    connectOrCreate?: DistribuicaoCreateOrConnectWithoutVoluntarioInput | DistribuicaoCreateOrConnectWithoutVoluntarioInput[]
    createMany?: DistribuicaoCreateManyVoluntarioInputEnvelope
    connect?: DistribuicaoWhereUniqueInput | DistribuicaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DoacaoUpdateManyWithoutVoluntarioNestedInput = {
    create?: XOR<DoacaoCreateWithoutVoluntarioInput, DoacaoUncheckedCreateWithoutVoluntarioInput> | DoacaoCreateWithoutVoluntarioInput[] | DoacaoUncheckedCreateWithoutVoluntarioInput[]
    connectOrCreate?: DoacaoCreateOrConnectWithoutVoluntarioInput | DoacaoCreateOrConnectWithoutVoluntarioInput[]
    upsert?: DoacaoUpsertWithWhereUniqueWithoutVoluntarioInput | DoacaoUpsertWithWhereUniqueWithoutVoluntarioInput[]
    createMany?: DoacaoCreateManyVoluntarioInputEnvelope
    set?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    disconnect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    delete?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    connect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    update?: DoacaoUpdateWithWhereUniqueWithoutVoluntarioInput | DoacaoUpdateWithWhereUniqueWithoutVoluntarioInput[]
    updateMany?: DoacaoUpdateManyWithWhereWithoutVoluntarioInput | DoacaoUpdateManyWithWhereWithoutVoluntarioInput[]
    deleteMany?: DoacaoScalarWhereInput | DoacaoScalarWhereInput[]
  }

  export type DistribuicaoUpdateManyWithoutVoluntarioNestedInput = {
    create?: XOR<DistribuicaoCreateWithoutVoluntarioInput, DistribuicaoUncheckedCreateWithoutVoluntarioInput> | DistribuicaoCreateWithoutVoluntarioInput[] | DistribuicaoUncheckedCreateWithoutVoluntarioInput[]
    connectOrCreate?: DistribuicaoCreateOrConnectWithoutVoluntarioInput | DistribuicaoCreateOrConnectWithoutVoluntarioInput[]
    upsert?: DistribuicaoUpsertWithWhereUniqueWithoutVoluntarioInput | DistribuicaoUpsertWithWhereUniqueWithoutVoluntarioInput[]
    createMany?: DistribuicaoCreateManyVoluntarioInputEnvelope
    set?: DistribuicaoWhereUniqueInput | DistribuicaoWhereUniqueInput[]
    disconnect?: DistribuicaoWhereUniqueInput | DistribuicaoWhereUniqueInput[]
    delete?: DistribuicaoWhereUniqueInput | DistribuicaoWhereUniqueInput[]
    connect?: DistribuicaoWhereUniqueInput | DistribuicaoWhereUniqueInput[]
    update?: DistribuicaoUpdateWithWhereUniqueWithoutVoluntarioInput | DistribuicaoUpdateWithWhereUniqueWithoutVoluntarioInput[]
    updateMany?: DistribuicaoUpdateManyWithWhereWithoutVoluntarioInput | DistribuicaoUpdateManyWithWhereWithoutVoluntarioInput[]
    deleteMany?: DistribuicaoScalarWhereInput | DistribuicaoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DoacaoUncheckedUpdateManyWithoutVoluntarioNestedInput = {
    create?: XOR<DoacaoCreateWithoutVoluntarioInput, DoacaoUncheckedCreateWithoutVoluntarioInput> | DoacaoCreateWithoutVoluntarioInput[] | DoacaoUncheckedCreateWithoutVoluntarioInput[]
    connectOrCreate?: DoacaoCreateOrConnectWithoutVoluntarioInput | DoacaoCreateOrConnectWithoutVoluntarioInput[]
    upsert?: DoacaoUpsertWithWhereUniqueWithoutVoluntarioInput | DoacaoUpsertWithWhereUniqueWithoutVoluntarioInput[]
    createMany?: DoacaoCreateManyVoluntarioInputEnvelope
    set?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    disconnect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    delete?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    connect?: DoacaoWhereUniqueInput | DoacaoWhereUniqueInput[]
    update?: DoacaoUpdateWithWhereUniqueWithoutVoluntarioInput | DoacaoUpdateWithWhereUniqueWithoutVoluntarioInput[]
    updateMany?: DoacaoUpdateManyWithWhereWithoutVoluntarioInput | DoacaoUpdateManyWithWhereWithoutVoluntarioInput[]
    deleteMany?: DoacaoScalarWhereInput | DoacaoScalarWhereInput[]
  }

  export type DistribuicaoUncheckedUpdateManyWithoutVoluntarioNestedInput = {
    create?: XOR<DistribuicaoCreateWithoutVoluntarioInput, DistribuicaoUncheckedCreateWithoutVoluntarioInput> | DistribuicaoCreateWithoutVoluntarioInput[] | DistribuicaoUncheckedCreateWithoutVoluntarioInput[]
    connectOrCreate?: DistribuicaoCreateOrConnectWithoutVoluntarioInput | DistribuicaoCreateOrConnectWithoutVoluntarioInput[]
    upsert?: DistribuicaoUpsertWithWhereUniqueWithoutVoluntarioInput | DistribuicaoUpsertWithWhereUniqueWithoutVoluntarioInput[]
    createMany?: DistribuicaoCreateManyVoluntarioInputEnvelope
    set?: DistribuicaoWhereUniqueInput | DistribuicaoWhereUniqueInput[]
    disconnect?: DistribuicaoWhereUniqueInput | DistribuicaoWhereUniqueInput[]
    delete?: DistribuicaoWhereUniqueInput | DistribuicaoWhereUniqueInput[]
    connect?: DistribuicaoWhereUniqueInput | DistribuicaoWhereUniqueInput[]
    update?: DistribuicaoUpdateWithWhereUniqueWithoutVoluntarioInput | DistribuicaoUpdateWithWhereUniqueWithoutVoluntarioInput[]
    updateMany?: DistribuicaoUpdateManyWithWhereWithoutVoluntarioInput | DistribuicaoUpdateManyWithWhereWithoutVoluntarioInput[]
    deleteMany?: DistribuicaoScalarWhereInput | DistribuicaoScalarWhereInput[]
  }

  export type DistribuicaoCreateNestedManyWithoutBeneficiarioInput = {
    create?: XOR<DistribuicaoCreateWithoutBeneficiarioInput, DistribuicaoUncheckedCreateWithoutBeneficiarioInput> | DistribuicaoCreateWithoutBeneficiarioInput[] | DistribuicaoUncheckedCreateWithoutBeneficiarioInput[]
    connectOrCreate?: DistribuicaoCreateOrConnectWithoutBeneficiarioInput | DistribuicaoCreateOrConnectWithoutBeneficiarioInput[]
    createMany?: DistribuicaoCreateManyBeneficiarioInputEnvelope
    connect?: DistribuicaoWhereUniqueInput | DistribuicaoWhereUniqueInput[]
  }

  export type DistribuicaoUncheckedCreateNestedManyWithoutBeneficiarioInput = {
    create?: XOR<DistribuicaoCreateWithoutBeneficiarioInput, DistribuicaoUncheckedCreateWithoutBeneficiarioInput> | DistribuicaoCreateWithoutBeneficiarioInput[] | DistribuicaoUncheckedCreateWithoutBeneficiarioInput[]
    connectOrCreate?: DistribuicaoCreateOrConnectWithoutBeneficiarioInput | DistribuicaoCreateOrConnectWithoutBeneficiarioInput[]
    createMany?: DistribuicaoCreateManyBeneficiarioInputEnvelope
    connect?: DistribuicaoWhereUniqueInput | DistribuicaoWhereUniqueInput[]
  }

  export type DistribuicaoUpdateManyWithoutBeneficiarioNestedInput = {
    create?: XOR<DistribuicaoCreateWithoutBeneficiarioInput, DistribuicaoUncheckedCreateWithoutBeneficiarioInput> | DistribuicaoCreateWithoutBeneficiarioInput[] | DistribuicaoUncheckedCreateWithoutBeneficiarioInput[]
    connectOrCreate?: DistribuicaoCreateOrConnectWithoutBeneficiarioInput | DistribuicaoCreateOrConnectWithoutBeneficiarioInput[]
    upsert?: DistribuicaoUpsertWithWhereUniqueWithoutBeneficiarioInput | DistribuicaoUpsertWithWhereUniqueWithoutBeneficiarioInput[]
    createMany?: DistribuicaoCreateManyBeneficiarioInputEnvelope
    set?: DistribuicaoWhereUniqueInput | DistribuicaoWhereUniqueInput[]
    disconnect?: DistribuicaoWhereUniqueInput | DistribuicaoWhereUniqueInput[]
    delete?: DistribuicaoWhereUniqueInput | DistribuicaoWhereUniqueInput[]
    connect?: DistribuicaoWhereUniqueInput | DistribuicaoWhereUniqueInput[]
    update?: DistribuicaoUpdateWithWhereUniqueWithoutBeneficiarioInput | DistribuicaoUpdateWithWhereUniqueWithoutBeneficiarioInput[]
    updateMany?: DistribuicaoUpdateManyWithWhereWithoutBeneficiarioInput | DistribuicaoUpdateManyWithWhereWithoutBeneficiarioInput[]
    deleteMany?: DistribuicaoScalarWhereInput | DistribuicaoScalarWhereInput[]
  }

  export type DistribuicaoUncheckedUpdateManyWithoutBeneficiarioNestedInput = {
    create?: XOR<DistribuicaoCreateWithoutBeneficiarioInput, DistribuicaoUncheckedCreateWithoutBeneficiarioInput> | DistribuicaoCreateWithoutBeneficiarioInput[] | DistribuicaoUncheckedCreateWithoutBeneficiarioInput[]
    connectOrCreate?: DistribuicaoCreateOrConnectWithoutBeneficiarioInput | DistribuicaoCreateOrConnectWithoutBeneficiarioInput[]
    upsert?: DistribuicaoUpsertWithWhereUniqueWithoutBeneficiarioInput | DistribuicaoUpsertWithWhereUniqueWithoutBeneficiarioInput[]
    createMany?: DistribuicaoCreateManyBeneficiarioInputEnvelope
    set?: DistribuicaoWhereUniqueInput | DistribuicaoWhereUniqueInput[]
    disconnect?: DistribuicaoWhereUniqueInput | DistribuicaoWhereUniqueInput[]
    delete?: DistribuicaoWhereUniqueInput | DistribuicaoWhereUniqueInput[]
    connect?: DistribuicaoWhereUniqueInput | DistribuicaoWhereUniqueInput[]
    update?: DistribuicaoUpdateWithWhereUniqueWithoutBeneficiarioInput | DistribuicaoUpdateWithWhereUniqueWithoutBeneficiarioInput[]
    updateMany?: DistribuicaoUpdateManyWithWhereWithoutBeneficiarioInput | DistribuicaoUpdateManyWithWhereWithoutBeneficiarioInput[]
    deleteMany?: DistribuicaoScalarWhereInput | DistribuicaoScalarWhereInput[]
  }

  export type VoluntarioCreateNestedOneWithoutDoacoesInput = {
    create?: XOR<VoluntarioCreateWithoutDoacoesInput, VoluntarioUncheckedCreateWithoutDoacoesInput>
    connectOrCreate?: VoluntarioCreateOrConnectWithoutDoacoesInput
    connect?: VoluntarioWhereUniqueInput
  }

  export type ItemDoacaoCreateNestedManyWithoutDoacaoInput = {
    create?: XOR<ItemDoacaoCreateWithoutDoacaoInput, ItemDoacaoUncheckedCreateWithoutDoacaoInput> | ItemDoacaoCreateWithoutDoacaoInput[] | ItemDoacaoUncheckedCreateWithoutDoacaoInput[]
    connectOrCreate?: ItemDoacaoCreateOrConnectWithoutDoacaoInput | ItemDoacaoCreateOrConnectWithoutDoacaoInput[]
    createMany?: ItemDoacaoCreateManyDoacaoInputEnvelope
    connect?: ItemDoacaoWhereUniqueInput | ItemDoacaoWhereUniqueInput[]
  }

  export type ItemDoacaoUncheckedCreateNestedManyWithoutDoacaoInput = {
    create?: XOR<ItemDoacaoCreateWithoutDoacaoInput, ItemDoacaoUncheckedCreateWithoutDoacaoInput> | ItemDoacaoCreateWithoutDoacaoInput[] | ItemDoacaoUncheckedCreateWithoutDoacaoInput[]
    connectOrCreate?: ItemDoacaoCreateOrConnectWithoutDoacaoInput | ItemDoacaoCreateOrConnectWithoutDoacaoInput[]
    createMany?: ItemDoacaoCreateManyDoacaoInputEnvelope
    connect?: ItemDoacaoWhereUniqueInput | ItemDoacaoWhereUniqueInput[]
  }

  export type VoluntarioUpdateOneRequiredWithoutDoacoesNestedInput = {
    create?: XOR<VoluntarioCreateWithoutDoacoesInput, VoluntarioUncheckedCreateWithoutDoacoesInput>
    connectOrCreate?: VoluntarioCreateOrConnectWithoutDoacoesInput
    upsert?: VoluntarioUpsertWithoutDoacoesInput
    connect?: VoluntarioWhereUniqueInput
    update?: XOR<XOR<VoluntarioUpdateToOneWithWhereWithoutDoacoesInput, VoluntarioUpdateWithoutDoacoesInput>, VoluntarioUncheckedUpdateWithoutDoacoesInput>
  }

  export type ItemDoacaoUpdateManyWithoutDoacaoNestedInput = {
    create?: XOR<ItemDoacaoCreateWithoutDoacaoInput, ItemDoacaoUncheckedCreateWithoutDoacaoInput> | ItemDoacaoCreateWithoutDoacaoInput[] | ItemDoacaoUncheckedCreateWithoutDoacaoInput[]
    connectOrCreate?: ItemDoacaoCreateOrConnectWithoutDoacaoInput | ItemDoacaoCreateOrConnectWithoutDoacaoInput[]
    upsert?: ItemDoacaoUpsertWithWhereUniqueWithoutDoacaoInput | ItemDoacaoUpsertWithWhereUniqueWithoutDoacaoInput[]
    createMany?: ItemDoacaoCreateManyDoacaoInputEnvelope
    set?: ItemDoacaoWhereUniqueInput | ItemDoacaoWhereUniqueInput[]
    disconnect?: ItemDoacaoWhereUniqueInput | ItemDoacaoWhereUniqueInput[]
    delete?: ItemDoacaoWhereUniqueInput | ItemDoacaoWhereUniqueInput[]
    connect?: ItemDoacaoWhereUniqueInput | ItemDoacaoWhereUniqueInput[]
    update?: ItemDoacaoUpdateWithWhereUniqueWithoutDoacaoInput | ItemDoacaoUpdateWithWhereUniqueWithoutDoacaoInput[]
    updateMany?: ItemDoacaoUpdateManyWithWhereWithoutDoacaoInput | ItemDoacaoUpdateManyWithWhereWithoutDoacaoInput[]
    deleteMany?: ItemDoacaoScalarWhereInput | ItemDoacaoScalarWhereInput[]
  }

  export type ItemDoacaoUncheckedUpdateManyWithoutDoacaoNestedInput = {
    create?: XOR<ItemDoacaoCreateWithoutDoacaoInput, ItemDoacaoUncheckedCreateWithoutDoacaoInput> | ItemDoacaoCreateWithoutDoacaoInput[] | ItemDoacaoUncheckedCreateWithoutDoacaoInput[]
    connectOrCreate?: ItemDoacaoCreateOrConnectWithoutDoacaoInput | ItemDoacaoCreateOrConnectWithoutDoacaoInput[]
    upsert?: ItemDoacaoUpsertWithWhereUniqueWithoutDoacaoInput | ItemDoacaoUpsertWithWhereUniqueWithoutDoacaoInput[]
    createMany?: ItemDoacaoCreateManyDoacaoInputEnvelope
    set?: ItemDoacaoWhereUniqueInput | ItemDoacaoWhereUniqueInput[]
    disconnect?: ItemDoacaoWhereUniqueInput | ItemDoacaoWhereUniqueInput[]
    delete?: ItemDoacaoWhereUniqueInput | ItemDoacaoWhereUniqueInput[]
    connect?: ItemDoacaoWhereUniqueInput | ItemDoacaoWhereUniqueInput[]
    update?: ItemDoacaoUpdateWithWhereUniqueWithoutDoacaoInput | ItemDoacaoUpdateWithWhereUniqueWithoutDoacaoInput[]
    updateMany?: ItemDoacaoUpdateManyWithWhereWithoutDoacaoInput | ItemDoacaoUpdateManyWithWhereWithoutDoacaoInput[]
    deleteMany?: ItemDoacaoScalarWhereInput | ItemDoacaoScalarWhereInput[]
  }

  export type DoacaoCreateNestedOneWithoutItensInput = {
    create?: XOR<DoacaoCreateWithoutItensInput, DoacaoUncheckedCreateWithoutItensInput>
    connectOrCreate?: DoacaoCreateOrConnectWithoutItensInput
    connect?: DoacaoWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutEntradasInput = {
    create?: XOR<ItemCreateWithoutEntradasInput, ItemUncheckedCreateWithoutEntradasInput>
    connectOrCreate?: ItemCreateOrConnectWithoutEntradasInput
    connect?: ItemWhereUniqueInput
  }

  export type DoacaoUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<DoacaoCreateWithoutItensInput, DoacaoUncheckedCreateWithoutItensInput>
    connectOrCreate?: DoacaoCreateOrConnectWithoutItensInput
    upsert?: DoacaoUpsertWithoutItensInput
    connect?: DoacaoWhereUniqueInput
    update?: XOR<XOR<DoacaoUpdateToOneWithWhereWithoutItensInput, DoacaoUpdateWithoutItensInput>, DoacaoUncheckedUpdateWithoutItensInput>
  }

  export type ItemUpdateOneRequiredWithoutEntradasNestedInput = {
    create?: XOR<ItemCreateWithoutEntradasInput, ItemUncheckedCreateWithoutEntradasInput>
    connectOrCreate?: ItemCreateOrConnectWithoutEntradasInput
    upsert?: ItemUpsertWithoutEntradasInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutEntradasInput, ItemUpdateWithoutEntradasInput>, ItemUncheckedUpdateWithoutEntradasInput>
  }

  export type VoluntarioCreateNestedOneWithoutDistribuicoesInput = {
    create?: XOR<VoluntarioCreateWithoutDistribuicoesInput, VoluntarioUncheckedCreateWithoutDistribuicoesInput>
    connectOrCreate?: VoluntarioCreateOrConnectWithoutDistribuicoesInput
    connect?: VoluntarioWhereUniqueInput
  }

  export type BeneficiarioCreateNestedOneWithoutDistribuicoesInput = {
    create?: XOR<BeneficiarioCreateWithoutDistribuicoesInput, BeneficiarioUncheckedCreateWithoutDistribuicoesInput>
    connectOrCreate?: BeneficiarioCreateOrConnectWithoutDistribuicoesInput
    connect?: BeneficiarioWhereUniqueInput
  }

  export type ItemDistribuicaoCreateNestedManyWithoutDistribuicaoInput = {
    create?: XOR<ItemDistribuicaoCreateWithoutDistribuicaoInput, ItemDistribuicaoUncheckedCreateWithoutDistribuicaoInput> | ItemDistribuicaoCreateWithoutDistribuicaoInput[] | ItemDistribuicaoUncheckedCreateWithoutDistribuicaoInput[]
    connectOrCreate?: ItemDistribuicaoCreateOrConnectWithoutDistribuicaoInput | ItemDistribuicaoCreateOrConnectWithoutDistribuicaoInput[]
    createMany?: ItemDistribuicaoCreateManyDistribuicaoInputEnvelope
    connect?: ItemDistribuicaoWhereUniqueInput | ItemDistribuicaoWhereUniqueInput[]
  }

  export type ItemDistribuicaoUncheckedCreateNestedManyWithoutDistribuicaoInput = {
    create?: XOR<ItemDistribuicaoCreateWithoutDistribuicaoInput, ItemDistribuicaoUncheckedCreateWithoutDistribuicaoInput> | ItemDistribuicaoCreateWithoutDistribuicaoInput[] | ItemDistribuicaoUncheckedCreateWithoutDistribuicaoInput[]
    connectOrCreate?: ItemDistribuicaoCreateOrConnectWithoutDistribuicaoInput | ItemDistribuicaoCreateOrConnectWithoutDistribuicaoInput[]
    createMany?: ItemDistribuicaoCreateManyDistribuicaoInputEnvelope
    connect?: ItemDistribuicaoWhereUniqueInput | ItemDistribuicaoWhereUniqueInput[]
  }

  export type VoluntarioUpdateOneRequiredWithoutDistribuicoesNestedInput = {
    create?: XOR<VoluntarioCreateWithoutDistribuicoesInput, VoluntarioUncheckedCreateWithoutDistribuicoesInput>
    connectOrCreate?: VoluntarioCreateOrConnectWithoutDistribuicoesInput
    upsert?: VoluntarioUpsertWithoutDistribuicoesInput
    connect?: VoluntarioWhereUniqueInput
    update?: XOR<XOR<VoluntarioUpdateToOneWithWhereWithoutDistribuicoesInput, VoluntarioUpdateWithoutDistribuicoesInput>, VoluntarioUncheckedUpdateWithoutDistribuicoesInput>
  }

  export type BeneficiarioUpdateOneRequiredWithoutDistribuicoesNestedInput = {
    create?: XOR<BeneficiarioCreateWithoutDistribuicoesInput, BeneficiarioUncheckedCreateWithoutDistribuicoesInput>
    connectOrCreate?: BeneficiarioCreateOrConnectWithoutDistribuicoesInput
    upsert?: BeneficiarioUpsertWithoutDistribuicoesInput
    connect?: BeneficiarioWhereUniqueInput
    update?: XOR<XOR<BeneficiarioUpdateToOneWithWhereWithoutDistribuicoesInput, BeneficiarioUpdateWithoutDistribuicoesInput>, BeneficiarioUncheckedUpdateWithoutDistribuicoesInput>
  }

  export type ItemDistribuicaoUpdateManyWithoutDistribuicaoNestedInput = {
    create?: XOR<ItemDistribuicaoCreateWithoutDistribuicaoInput, ItemDistribuicaoUncheckedCreateWithoutDistribuicaoInput> | ItemDistribuicaoCreateWithoutDistribuicaoInput[] | ItemDistribuicaoUncheckedCreateWithoutDistribuicaoInput[]
    connectOrCreate?: ItemDistribuicaoCreateOrConnectWithoutDistribuicaoInput | ItemDistribuicaoCreateOrConnectWithoutDistribuicaoInput[]
    upsert?: ItemDistribuicaoUpsertWithWhereUniqueWithoutDistribuicaoInput | ItemDistribuicaoUpsertWithWhereUniqueWithoutDistribuicaoInput[]
    createMany?: ItemDistribuicaoCreateManyDistribuicaoInputEnvelope
    set?: ItemDistribuicaoWhereUniqueInput | ItemDistribuicaoWhereUniqueInput[]
    disconnect?: ItemDistribuicaoWhereUniqueInput | ItemDistribuicaoWhereUniqueInput[]
    delete?: ItemDistribuicaoWhereUniqueInput | ItemDistribuicaoWhereUniqueInput[]
    connect?: ItemDistribuicaoWhereUniqueInput | ItemDistribuicaoWhereUniqueInput[]
    update?: ItemDistribuicaoUpdateWithWhereUniqueWithoutDistribuicaoInput | ItemDistribuicaoUpdateWithWhereUniqueWithoutDistribuicaoInput[]
    updateMany?: ItemDistribuicaoUpdateManyWithWhereWithoutDistribuicaoInput | ItemDistribuicaoUpdateManyWithWhereWithoutDistribuicaoInput[]
    deleteMany?: ItemDistribuicaoScalarWhereInput | ItemDistribuicaoScalarWhereInput[]
  }

  export type ItemDistribuicaoUncheckedUpdateManyWithoutDistribuicaoNestedInput = {
    create?: XOR<ItemDistribuicaoCreateWithoutDistribuicaoInput, ItemDistribuicaoUncheckedCreateWithoutDistribuicaoInput> | ItemDistribuicaoCreateWithoutDistribuicaoInput[] | ItemDistribuicaoUncheckedCreateWithoutDistribuicaoInput[]
    connectOrCreate?: ItemDistribuicaoCreateOrConnectWithoutDistribuicaoInput | ItemDistribuicaoCreateOrConnectWithoutDistribuicaoInput[]
    upsert?: ItemDistribuicaoUpsertWithWhereUniqueWithoutDistribuicaoInput | ItemDistribuicaoUpsertWithWhereUniqueWithoutDistribuicaoInput[]
    createMany?: ItemDistribuicaoCreateManyDistribuicaoInputEnvelope
    set?: ItemDistribuicaoWhereUniqueInput | ItemDistribuicaoWhereUniqueInput[]
    disconnect?: ItemDistribuicaoWhereUniqueInput | ItemDistribuicaoWhereUniqueInput[]
    delete?: ItemDistribuicaoWhereUniqueInput | ItemDistribuicaoWhereUniqueInput[]
    connect?: ItemDistribuicaoWhereUniqueInput | ItemDistribuicaoWhereUniqueInput[]
    update?: ItemDistribuicaoUpdateWithWhereUniqueWithoutDistribuicaoInput | ItemDistribuicaoUpdateWithWhereUniqueWithoutDistribuicaoInput[]
    updateMany?: ItemDistribuicaoUpdateManyWithWhereWithoutDistribuicaoInput | ItemDistribuicaoUpdateManyWithWhereWithoutDistribuicaoInput[]
    deleteMany?: ItemDistribuicaoScalarWhereInput | ItemDistribuicaoScalarWhereInput[]
  }

  export type DistribuicaoCreateNestedOneWithoutItensInput = {
    create?: XOR<DistribuicaoCreateWithoutItensInput, DistribuicaoUncheckedCreateWithoutItensInput>
    connectOrCreate?: DistribuicaoCreateOrConnectWithoutItensInput
    connect?: DistribuicaoWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutSaidasInput = {
    create?: XOR<ItemCreateWithoutSaidasInput, ItemUncheckedCreateWithoutSaidasInput>
    connectOrCreate?: ItemCreateOrConnectWithoutSaidasInput
    connect?: ItemWhereUniqueInput
  }

  export type DistribuicaoUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<DistribuicaoCreateWithoutItensInput, DistribuicaoUncheckedCreateWithoutItensInput>
    connectOrCreate?: DistribuicaoCreateOrConnectWithoutItensInput
    upsert?: DistribuicaoUpsertWithoutItensInput
    connect?: DistribuicaoWhereUniqueInput
    update?: XOR<XOR<DistribuicaoUpdateToOneWithWhereWithoutItensInput, DistribuicaoUpdateWithoutItensInput>, DistribuicaoUncheckedUpdateWithoutItensInput>
  }

  export type ItemUpdateOneRequiredWithoutSaidasNestedInput = {
    create?: XOR<ItemCreateWithoutSaidasInput, ItemUncheckedCreateWithoutSaidasInput>
    connectOrCreate?: ItemCreateOrConnectWithoutSaidasInput
    upsert?: ItemUpsertWithoutSaidasInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutSaidasInput, ItemUpdateWithoutSaidasInput>, ItemUncheckedUpdateWithoutSaidasInput>
  }

  export type TipoCreateNestedOneWithoutItensInput = {
    create?: XOR<TipoCreateWithoutItensInput, TipoUncheckedCreateWithoutItensInput>
    connectOrCreate?: TipoCreateOrConnectWithoutItensInput
    connect?: TipoWhereUniqueInput
  }

  export type TamanhoCreateNestedOneWithoutItensInput = {
    create?: XOR<TamanhoCreateWithoutItensInput, TamanhoUncheckedCreateWithoutItensInput>
    connectOrCreate?: TamanhoCreateOrConnectWithoutItensInput
    connect?: TamanhoWhereUniqueInput
  }

  export type ItemDoacaoCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemDoacaoCreateWithoutItemInput, ItemDoacaoUncheckedCreateWithoutItemInput> | ItemDoacaoCreateWithoutItemInput[] | ItemDoacaoUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemDoacaoCreateOrConnectWithoutItemInput | ItemDoacaoCreateOrConnectWithoutItemInput[]
    createMany?: ItemDoacaoCreateManyItemInputEnvelope
    connect?: ItemDoacaoWhereUniqueInput | ItemDoacaoWhereUniqueInput[]
  }

  export type ItemDistribuicaoCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemDistribuicaoCreateWithoutItemInput, ItemDistribuicaoUncheckedCreateWithoutItemInput> | ItemDistribuicaoCreateWithoutItemInput[] | ItemDistribuicaoUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemDistribuicaoCreateOrConnectWithoutItemInput | ItemDistribuicaoCreateOrConnectWithoutItemInput[]
    createMany?: ItemDistribuicaoCreateManyItemInputEnvelope
    connect?: ItemDistribuicaoWhereUniqueInput | ItemDistribuicaoWhereUniqueInput[]
  }

  export type ItemDoacaoUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemDoacaoCreateWithoutItemInput, ItemDoacaoUncheckedCreateWithoutItemInput> | ItemDoacaoCreateWithoutItemInput[] | ItemDoacaoUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemDoacaoCreateOrConnectWithoutItemInput | ItemDoacaoCreateOrConnectWithoutItemInput[]
    createMany?: ItemDoacaoCreateManyItemInputEnvelope
    connect?: ItemDoacaoWhereUniqueInput | ItemDoacaoWhereUniqueInput[]
  }

  export type ItemDistribuicaoUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemDistribuicaoCreateWithoutItemInput, ItemDistribuicaoUncheckedCreateWithoutItemInput> | ItemDistribuicaoCreateWithoutItemInput[] | ItemDistribuicaoUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemDistribuicaoCreateOrConnectWithoutItemInput | ItemDistribuicaoCreateOrConnectWithoutItemInput[]
    createMany?: ItemDistribuicaoCreateManyItemInputEnvelope
    connect?: ItemDistribuicaoWhereUniqueInput | ItemDistribuicaoWhereUniqueInput[]
  }

  export type TipoUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<TipoCreateWithoutItensInput, TipoUncheckedCreateWithoutItensInput>
    connectOrCreate?: TipoCreateOrConnectWithoutItensInput
    upsert?: TipoUpsertWithoutItensInput
    connect?: TipoWhereUniqueInput
    update?: XOR<XOR<TipoUpdateToOneWithWhereWithoutItensInput, TipoUpdateWithoutItensInput>, TipoUncheckedUpdateWithoutItensInput>
  }

  export type TamanhoUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<TamanhoCreateWithoutItensInput, TamanhoUncheckedCreateWithoutItensInput>
    connectOrCreate?: TamanhoCreateOrConnectWithoutItensInput
    upsert?: TamanhoUpsertWithoutItensInput
    connect?: TamanhoWhereUniqueInput
    update?: XOR<XOR<TamanhoUpdateToOneWithWhereWithoutItensInput, TamanhoUpdateWithoutItensInput>, TamanhoUncheckedUpdateWithoutItensInput>
  }

  export type ItemDoacaoUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemDoacaoCreateWithoutItemInput, ItemDoacaoUncheckedCreateWithoutItemInput> | ItemDoacaoCreateWithoutItemInput[] | ItemDoacaoUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemDoacaoCreateOrConnectWithoutItemInput | ItemDoacaoCreateOrConnectWithoutItemInput[]
    upsert?: ItemDoacaoUpsertWithWhereUniqueWithoutItemInput | ItemDoacaoUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemDoacaoCreateManyItemInputEnvelope
    set?: ItemDoacaoWhereUniqueInput | ItemDoacaoWhereUniqueInput[]
    disconnect?: ItemDoacaoWhereUniqueInput | ItemDoacaoWhereUniqueInput[]
    delete?: ItemDoacaoWhereUniqueInput | ItemDoacaoWhereUniqueInput[]
    connect?: ItemDoacaoWhereUniqueInput | ItemDoacaoWhereUniqueInput[]
    update?: ItemDoacaoUpdateWithWhereUniqueWithoutItemInput | ItemDoacaoUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemDoacaoUpdateManyWithWhereWithoutItemInput | ItemDoacaoUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemDoacaoScalarWhereInput | ItemDoacaoScalarWhereInput[]
  }

  export type ItemDistribuicaoUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemDistribuicaoCreateWithoutItemInput, ItemDistribuicaoUncheckedCreateWithoutItemInput> | ItemDistribuicaoCreateWithoutItemInput[] | ItemDistribuicaoUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemDistribuicaoCreateOrConnectWithoutItemInput | ItemDistribuicaoCreateOrConnectWithoutItemInput[]
    upsert?: ItemDistribuicaoUpsertWithWhereUniqueWithoutItemInput | ItemDistribuicaoUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemDistribuicaoCreateManyItemInputEnvelope
    set?: ItemDistribuicaoWhereUniqueInput | ItemDistribuicaoWhereUniqueInput[]
    disconnect?: ItemDistribuicaoWhereUniqueInput | ItemDistribuicaoWhereUniqueInput[]
    delete?: ItemDistribuicaoWhereUniqueInput | ItemDistribuicaoWhereUniqueInput[]
    connect?: ItemDistribuicaoWhereUniqueInput | ItemDistribuicaoWhereUniqueInput[]
    update?: ItemDistribuicaoUpdateWithWhereUniqueWithoutItemInput | ItemDistribuicaoUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemDistribuicaoUpdateManyWithWhereWithoutItemInput | ItemDistribuicaoUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemDistribuicaoScalarWhereInput | ItemDistribuicaoScalarWhereInput[]
  }

  export type ItemDoacaoUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemDoacaoCreateWithoutItemInput, ItemDoacaoUncheckedCreateWithoutItemInput> | ItemDoacaoCreateWithoutItemInput[] | ItemDoacaoUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemDoacaoCreateOrConnectWithoutItemInput | ItemDoacaoCreateOrConnectWithoutItemInput[]
    upsert?: ItemDoacaoUpsertWithWhereUniqueWithoutItemInput | ItemDoacaoUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemDoacaoCreateManyItemInputEnvelope
    set?: ItemDoacaoWhereUniqueInput | ItemDoacaoWhereUniqueInput[]
    disconnect?: ItemDoacaoWhereUniqueInput | ItemDoacaoWhereUniqueInput[]
    delete?: ItemDoacaoWhereUniqueInput | ItemDoacaoWhereUniqueInput[]
    connect?: ItemDoacaoWhereUniqueInput | ItemDoacaoWhereUniqueInput[]
    update?: ItemDoacaoUpdateWithWhereUniqueWithoutItemInput | ItemDoacaoUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemDoacaoUpdateManyWithWhereWithoutItemInput | ItemDoacaoUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemDoacaoScalarWhereInput | ItemDoacaoScalarWhereInput[]
  }

  export type ItemDistribuicaoUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemDistribuicaoCreateWithoutItemInput, ItemDistribuicaoUncheckedCreateWithoutItemInput> | ItemDistribuicaoCreateWithoutItemInput[] | ItemDistribuicaoUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemDistribuicaoCreateOrConnectWithoutItemInput | ItemDistribuicaoCreateOrConnectWithoutItemInput[]
    upsert?: ItemDistribuicaoUpsertWithWhereUniqueWithoutItemInput | ItemDistribuicaoUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemDistribuicaoCreateManyItemInputEnvelope
    set?: ItemDistribuicaoWhereUniqueInput | ItemDistribuicaoWhereUniqueInput[]
    disconnect?: ItemDistribuicaoWhereUniqueInput | ItemDistribuicaoWhereUniqueInput[]
    delete?: ItemDistribuicaoWhereUniqueInput | ItemDistribuicaoWhereUniqueInput[]
    connect?: ItemDistribuicaoWhereUniqueInput | ItemDistribuicaoWhereUniqueInput[]
    update?: ItemDistribuicaoUpdateWithWhereUniqueWithoutItemInput | ItemDistribuicaoUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemDistribuicaoUpdateManyWithWhereWithoutItemInput | ItemDistribuicaoUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemDistribuicaoScalarWhereInput | ItemDistribuicaoScalarWhereInput[]
  }

  export type TamanhoCreateNestedManyWithoutTipoInput = {
    create?: XOR<TamanhoCreateWithoutTipoInput, TamanhoUncheckedCreateWithoutTipoInput> | TamanhoCreateWithoutTipoInput[] | TamanhoUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: TamanhoCreateOrConnectWithoutTipoInput | TamanhoCreateOrConnectWithoutTipoInput[]
    createMany?: TamanhoCreateManyTipoInputEnvelope
    connect?: TamanhoWhereUniqueInput | TamanhoWhereUniqueInput[]
  }

  export type ItemCreateNestedManyWithoutTipoInput = {
    create?: XOR<ItemCreateWithoutTipoInput, ItemUncheckedCreateWithoutTipoInput> | ItemCreateWithoutTipoInput[] | ItemUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutTipoInput | ItemCreateOrConnectWithoutTipoInput[]
    createMany?: ItemCreateManyTipoInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type TamanhoUncheckedCreateNestedManyWithoutTipoInput = {
    create?: XOR<TamanhoCreateWithoutTipoInput, TamanhoUncheckedCreateWithoutTipoInput> | TamanhoCreateWithoutTipoInput[] | TamanhoUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: TamanhoCreateOrConnectWithoutTipoInput | TamanhoCreateOrConnectWithoutTipoInput[]
    createMany?: TamanhoCreateManyTipoInputEnvelope
    connect?: TamanhoWhereUniqueInput | TamanhoWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutTipoInput = {
    create?: XOR<ItemCreateWithoutTipoInput, ItemUncheckedCreateWithoutTipoInput> | ItemCreateWithoutTipoInput[] | ItemUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutTipoInput | ItemCreateOrConnectWithoutTipoInput[]
    createMany?: ItemCreateManyTipoInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type TamanhoUpdateManyWithoutTipoNestedInput = {
    create?: XOR<TamanhoCreateWithoutTipoInput, TamanhoUncheckedCreateWithoutTipoInput> | TamanhoCreateWithoutTipoInput[] | TamanhoUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: TamanhoCreateOrConnectWithoutTipoInput | TamanhoCreateOrConnectWithoutTipoInput[]
    upsert?: TamanhoUpsertWithWhereUniqueWithoutTipoInput | TamanhoUpsertWithWhereUniqueWithoutTipoInput[]
    createMany?: TamanhoCreateManyTipoInputEnvelope
    set?: TamanhoWhereUniqueInput | TamanhoWhereUniqueInput[]
    disconnect?: TamanhoWhereUniqueInput | TamanhoWhereUniqueInput[]
    delete?: TamanhoWhereUniqueInput | TamanhoWhereUniqueInput[]
    connect?: TamanhoWhereUniqueInput | TamanhoWhereUniqueInput[]
    update?: TamanhoUpdateWithWhereUniqueWithoutTipoInput | TamanhoUpdateWithWhereUniqueWithoutTipoInput[]
    updateMany?: TamanhoUpdateManyWithWhereWithoutTipoInput | TamanhoUpdateManyWithWhereWithoutTipoInput[]
    deleteMany?: TamanhoScalarWhereInput | TamanhoScalarWhereInput[]
  }

  export type ItemUpdateManyWithoutTipoNestedInput = {
    create?: XOR<ItemCreateWithoutTipoInput, ItemUncheckedCreateWithoutTipoInput> | ItemCreateWithoutTipoInput[] | ItemUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutTipoInput | ItemCreateOrConnectWithoutTipoInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutTipoInput | ItemUpsertWithWhereUniqueWithoutTipoInput[]
    createMany?: ItemCreateManyTipoInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutTipoInput | ItemUpdateWithWhereUniqueWithoutTipoInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutTipoInput | ItemUpdateManyWithWhereWithoutTipoInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type TamanhoUncheckedUpdateManyWithoutTipoNestedInput = {
    create?: XOR<TamanhoCreateWithoutTipoInput, TamanhoUncheckedCreateWithoutTipoInput> | TamanhoCreateWithoutTipoInput[] | TamanhoUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: TamanhoCreateOrConnectWithoutTipoInput | TamanhoCreateOrConnectWithoutTipoInput[]
    upsert?: TamanhoUpsertWithWhereUniqueWithoutTipoInput | TamanhoUpsertWithWhereUniqueWithoutTipoInput[]
    createMany?: TamanhoCreateManyTipoInputEnvelope
    set?: TamanhoWhereUniqueInput | TamanhoWhereUniqueInput[]
    disconnect?: TamanhoWhereUniqueInput | TamanhoWhereUniqueInput[]
    delete?: TamanhoWhereUniqueInput | TamanhoWhereUniqueInput[]
    connect?: TamanhoWhereUniqueInput | TamanhoWhereUniqueInput[]
    update?: TamanhoUpdateWithWhereUniqueWithoutTipoInput | TamanhoUpdateWithWhereUniqueWithoutTipoInput[]
    updateMany?: TamanhoUpdateManyWithWhereWithoutTipoInput | TamanhoUpdateManyWithWhereWithoutTipoInput[]
    deleteMany?: TamanhoScalarWhereInput | TamanhoScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutTipoNestedInput = {
    create?: XOR<ItemCreateWithoutTipoInput, ItemUncheckedCreateWithoutTipoInput> | ItemCreateWithoutTipoInput[] | ItemUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutTipoInput | ItemCreateOrConnectWithoutTipoInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutTipoInput | ItemUpsertWithWhereUniqueWithoutTipoInput[]
    createMany?: ItemCreateManyTipoInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutTipoInput | ItemUpdateWithWhereUniqueWithoutTipoInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutTipoInput | ItemUpdateManyWithWhereWithoutTipoInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type TipoCreateNestedOneWithoutTamanhosInput = {
    create?: XOR<TipoCreateWithoutTamanhosInput, TipoUncheckedCreateWithoutTamanhosInput>
    connectOrCreate?: TipoCreateOrConnectWithoutTamanhosInput
    connect?: TipoWhereUniqueInput
  }

  export type ItemCreateNestedManyWithoutTamanhoInput = {
    create?: XOR<ItemCreateWithoutTamanhoInput, ItemUncheckedCreateWithoutTamanhoInput> | ItemCreateWithoutTamanhoInput[] | ItemUncheckedCreateWithoutTamanhoInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutTamanhoInput | ItemCreateOrConnectWithoutTamanhoInput[]
    createMany?: ItemCreateManyTamanhoInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutTamanhoInput = {
    create?: XOR<ItemCreateWithoutTamanhoInput, ItemUncheckedCreateWithoutTamanhoInput> | ItemCreateWithoutTamanhoInput[] | ItemUncheckedCreateWithoutTamanhoInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutTamanhoInput | ItemCreateOrConnectWithoutTamanhoInput[]
    createMany?: ItemCreateManyTamanhoInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type TipoUpdateOneRequiredWithoutTamanhosNestedInput = {
    create?: XOR<TipoCreateWithoutTamanhosInput, TipoUncheckedCreateWithoutTamanhosInput>
    connectOrCreate?: TipoCreateOrConnectWithoutTamanhosInput
    upsert?: TipoUpsertWithoutTamanhosInput
    connect?: TipoWhereUniqueInput
    update?: XOR<XOR<TipoUpdateToOneWithWhereWithoutTamanhosInput, TipoUpdateWithoutTamanhosInput>, TipoUncheckedUpdateWithoutTamanhosInput>
  }

  export type ItemUpdateManyWithoutTamanhoNestedInput = {
    create?: XOR<ItemCreateWithoutTamanhoInput, ItemUncheckedCreateWithoutTamanhoInput> | ItemCreateWithoutTamanhoInput[] | ItemUncheckedCreateWithoutTamanhoInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutTamanhoInput | ItemCreateOrConnectWithoutTamanhoInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutTamanhoInput | ItemUpsertWithWhereUniqueWithoutTamanhoInput[]
    createMany?: ItemCreateManyTamanhoInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutTamanhoInput | ItemUpdateWithWhereUniqueWithoutTamanhoInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutTamanhoInput | ItemUpdateManyWithWhereWithoutTamanhoInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutTamanhoNestedInput = {
    create?: XOR<ItemCreateWithoutTamanhoInput, ItemUncheckedCreateWithoutTamanhoInput> | ItemCreateWithoutTamanhoInput[] | ItemUncheckedCreateWithoutTamanhoInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutTamanhoInput | ItemCreateOrConnectWithoutTamanhoInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutTamanhoInput | ItemUpsertWithWhereUniqueWithoutTamanhoInput[]
    createMany?: ItemCreateManyTamanhoInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutTamanhoInput | ItemUpdateWithWhereUniqueWithoutTamanhoInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutTamanhoInput | ItemUpdateManyWithWhereWithoutTamanhoInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DoacaoCreateWithoutVoluntarioInput = {
    data?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    itens?: ItemDoacaoCreateNestedManyWithoutDoacaoInput
  }

  export type DoacaoUncheckedCreateWithoutVoluntarioInput = {
    id?: number
    data?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    itens?: ItemDoacaoUncheckedCreateNestedManyWithoutDoacaoInput
  }

  export type DoacaoCreateOrConnectWithoutVoluntarioInput = {
    where: DoacaoWhereUniqueInput
    create: XOR<DoacaoCreateWithoutVoluntarioInput, DoacaoUncheckedCreateWithoutVoluntarioInput>
  }

  export type DoacaoCreateManyVoluntarioInputEnvelope = {
    data: DoacaoCreateManyVoluntarioInput | DoacaoCreateManyVoluntarioInput[]
    skipDuplicates?: boolean
  }

  export type DistribuicaoCreateWithoutVoluntarioInput = {
    data?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    beneficiario: BeneficiarioCreateNestedOneWithoutDistribuicoesInput
    itens?: ItemDistribuicaoCreateNestedManyWithoutDistribuicaoInput
  }

  export type DistribuicaoUncheckedCreateWithoutVoluntarioInput = {
    id?: number
    data?: Date | string
    beneficiarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itens?: ItemDistribuicaoUncheckedCreateNestedManyWithoutDistribuicaoInput
  }

  export type DistribuicaoCreateOrConnectWithoutVoluntarioInput = {
    where: DistribuicaoWhereUniqueInput
    create: XOR<DistribuicaoCreateWithoutVoluntarioInput, DistribuicaoUncheckedCreateWithoutVoluntarioInput>
  }

  export type DistribuicaoCreateManyVoluntarioInputEnvelope = {
    data: DistribuicaoCreateManyVoluntarioInput | DistribuicaoCreateManyVoluntarioInput[]
    skipDuplicates?: boolean
  }

  export type DoacaoUpsertWithWhereUniqueWithoutVoluntarioInput = {
    where: DoacaoWhereUniqueInput
    update: XOR<DoacaoUpdateWithoutVoluntarioInput, DoacaoUncheckedUpdateWithoutVoluntarioInput>
    create: XOR<DoacaoCreateWithoutVoluntarioInput, DoacaoUncheckedCreateWithoutVoluntarioInput>
  }

  export type DoacaoUpdateWithWhereUniqueWithoutVoluntarioInput = {
    where: DoacaoWhereUniqueInput
    data: XOR<DoacaoUpdateWithoutVoluntarioInput, DoacaoUncheckedUpdateWithoutVoluntarioInput>
  }

  export type DoacaoUpdateManyWithWhereWithoutVoluntarioInput = {
    where: DoacaoScalarWhereInput
    data: XOR<DoacaoUpdateManyMutationInput, DoacaoUncheckedUpdateManyWithoutVoluntarioInput>
  }

  export type DoacaoScalarWhereInput = {
    AND?: DoacaoScalarWhereInput | DoacaoScalarWhereInput[]
    OR?: DoacaoScalarWhereInput[]
    NOT?: DoacaoScalarWhereInput | DoacaoScalarWhereInput[]
    id?: IntFilter<"Doacao"> | number
    data?: DateTimeFilter<"Doacao"> | Date | string
    voluntarioId?: IntFilter<"Doacao"> | number
    createdAt?: DateTimeFilter<"Doacao"> | Date | string
    updatedAt?: DateTimeFilter<"Doacao"> | Date | string
  }

  export type DistribuicaoUpsertWithWhereUniqueWithoutVoluntarioInput = {
    where: DistribuicaoWhereUniqueInput
    update: XOR<DistribuicaoUpdateWithoutVoluntarioInput, DistribuicaoUncheckedUpdateWithoutVoluntarioInput>
    create: XOR<DistribuicaoCreateWithoutVoluntarioInput, DistribuicaoUncheckedCreateWithoutVoluntarioInput>
  }

  export type DistribuicaoUpdateWithWhereUniqueWithoutVoluntarioInput = {
    where: DistribuicaoWhereUniqueInput
    data: XOR<DistribuicaoUpdateWithoutVoluntarioInput, DistribuicaoUncheckedUpdateWithoutVoluntarioInput>
  }

  export type DistribuicaoUpdateManyWithWhereWithoutVoluntarioInput = {
    where: DistribuicaoScalarWhereInput
    data: XOR<DistribuicaoUpdateManyMutationInput, DistribuicaoUncheckedUpdateManyWithoutVoluntarioInput>
  }

  export type DistribuicaoScalarWhereInput = {
    AND?: DistribuicaoScalarWhereInput | DistribuicaoScalarWhereInput[]
    OR?: DistribuicaoScalarWhereInput[]
    NOT?: DistribuicaoScalarWhereInput | DistribuicaoScalarWhereInput[]
    id?: IntFilter<"Distribuicao"> | number
    data?: DateTimeFilter<"Distribuicao"> | Date | string
    voluntarioId?: IntFilter<"Distribuicao"> | number
    beneficiarioId?: IntFilter<"Distribuicao"> | number
    createdAt?: DateTimeFilter<"Distribuicao"> | Date | string
    updatedAt?: DateTimeFilter<"Distribuicao"> | Date | string
  }

  export type DistribuicaoCreateWithoutBeneficiarioInput = {
    data?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    voluntario: VoluntarioCreateNestedOneWithoutDistribuicoesInput
    itens?: ItemDistribuicaoCreateNestedManyWithoutDistribuicaoInput
  }

  export type DistribuicaoUncheckedCreateWithoutBeneficiarioInput = {
    id?: number
    data?: Date | string
    voluntarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itens?: ItemDistribuicaoUncheckedCreateNestedManyWithoutDistribuicaoInput
  }

  export type DistribuicaoCreateOrConnectWithoutBeneficiarioInput = {
    where: DistribuicaoWhereUniqueInput
    create: XOR<DistribuicaoCreateWithoutBeneficiarioInput, DistribuicaoUncheckedCreateWithoutBeneficiarioInput>
  }

  export type DistribuicaoCreateManyBeneficiarioInputEnvelope = {
    data: DistribuicaoCreateManyBeneficiarioInput | DistribuicaoCreateManyBeneficiarioInput[]
    skipDuplicates?: boolean
  }

  export type DistribuicaoUpsertWithWhereUniqueWithoutBeneficiarioInput = {
    where: DistribuicaoWhereUniqueInput
    update: XOR<DistribuicaoUpdateWithoutBeneficiarioInput, DistribuicaoUncheckedUpdateWithoutBeneficiarioInput>
    create: XOR<DistribuicaoCreateWithoutBeneficiarioInput, DistribuicaoUncheckedCreateWithoutBeneficiarioInput>
  }

  export type DistribuicaoUpdateWithWhereUniqueWithoutBeneficiarioInput = {
    where: DistribuicaoWhereUniqueInput
    data: XOR<DistribuicaoUpdateWithoutBeneficiarioInput, DistribuicaoUncheckedUpdateWithoutBeneficiarioInput>
  }

  export type DistribuicaoUpdateManyWithWhereWithoutBeneficiarioInput = {
    where: DistribuicaoScalarWhereInput
    data: XOR<DistribuicaoUpdateManyMutationInput, DistribuicaoUncheckedUpdateManyWithoutBeneficiarioInput>
  }

  export type VoluntarioCreateWithoutDoacoesInput = {
    nome: string
    email: string
    senha: string
    endereco?: string | null
    telefone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    distribuicoes?: DistribuicaoCreateNestedManyWithoutVoluntarioInput
  }

  export type VoluntarioUncheckedCreateWithoutDoacoesInput = {
    id?: number
    nome: string
    email: string
    senha: string
    endereco?: string | null
    telefone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    distribuicoes?: DistribuicaoUncheckedCreateNestedManyWithoutVoluntarioInput
  }

  export type VoluntarioCreateOrConnectWithoutDoacoesInput = {
    where: VoluntarioWhereUniqueInput
    create: XOR<VoluntarioCreateWithoutDoacoesInput, VoluntarioUncheckedCreateWithoutDoacoesInput>
  }

  export type ItemDoacaoCreateWithoutDoacaoInput = {
    quantidade: number
    item: ItemCreateNestedOneWithoutEntradasInput
  }

  export type ItemDoacaoUncheckedCreateWithoutDoacaoInput = {
    id?: number
    quantidade: number
    itemId: number
  }

  export type ItemDoacaoCreateOrConnectWithoutDoacaoInput = {
    where: ItemDoacaoWhereUniqueInput
    create: XOR<ItemDoacaoCreateWithoutDoacaoInput, ItemDoacaoUncheckedCreateWithoutDoacaoInput>
  }

  export type ItemDoacaoCreateManyDoacaoInputEnvelope = {
    data: ItemDoacaoCreateManyDoacaoInput | ItemDoacaoCreateManyDoacaoInput[]
    skipDuplicates?: boolean
  }

  export type VoluntarioUpsertWithoutDoacoesInput = {
    update: XOR<VoluntarioUpdateWithoutDoacoesInput, VoluntarioUncheckedUpdateWithoutDoacoesInput>
    create: XOR<VoluntarioCreateWithoutDoacoesInput, VoluntarioUncheckedCreateWithoutDoacoesInput>
    where?: VoluntarioWhereInput
  }

  export type VoluntarioUpdateToOneWithWhereWithoutDoacoesInput = {
    where?: VoluntarioWhereInput
    data: XOR<VoluntarioUpdateWithoutDoacoesInput, VoluntarioUncheckedUpdateWithoutDoacoesInput>
  }

  export type VoluntarioUpdateWithoutDoacoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distribuicoes?: DistribuicaoUpdateManyWithoutVoluntarioNestedInput
  }

  export type VoluntarioUncheckedUpdateWithoutDoacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distribuicoes?: DistribuicaoUncheckedUpdateManyWithoutVoluntarioNestedInput
  }

  export type ItemDoacaoUpsertWithWhereUniqueWithoutDoacaoInput = {
    where: ItemDoacaoWhereUniqueInput
    update: XOR<ItemDoacaoUpdateWithoutDoacaoInput, ItemDoacaoUncheckedUpdateWithoutDoacaoInput>
    create: XOR<ItemDoacaoCreateWithoutDoacaoInput, ItemDoacaoUncheckedCreateWithoutDoacaoInput>
  }

  export type ItemDoacaoUpdateWithWhereUniqueWithoutDoacaoInput = {
    where: ItemDoacaoWhereUniqueInput
    data: XOR<ItemDoacaoUpdateWithoutDoacaoInput, ItemDoacaoUncheckedUpdateWithoutDoacaoInput>
  }

  export type ItemDoacaoUpdateManyWithWhereWithoutDoacaoInput = {
    where: ItemDoacaoScalarWhereInput
    data: XOR<ItemDoacaoUpdateManyMutationInput, ItemDoacaoUncheckedUpdateManyWithoutDoacaoInput>
  }

  export type ItemDoacaoScalarWhereInput = {
    AND?: ItemDoacaoScalarWhereInput | ItemDoacaoScalarWhereInput[]
    OR?: ItemDoacaoScalarWhereInput[]
    NOT?: ItemDoacaoScalarWhereInput | ItemDoacaoScalarWhereInput[]
    id?: IntFilter<"ItemDoacao"> | number
    quantidade?: IntFilter<"ItemDoacao"> | number
    doacaoId?: IntFilter<"ItemDoacao"> | number
    itemId?: IntFilter<"ItemDoacao"> | number
  }

  export type DoacaoCreateWithoutItensInput = {
    data?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    voluntario: VoluntarioCreateNestedOneWithoutDoacoesInput
  }

  export type DoacaoUncheckedCreateWithoutItensInput = {
    id?: number
    data?: Date | string
    voluntarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoacaoCreateOrConnectWithoutItensInput = {
    where: DoacaoWhereUniqueInput
    create: XOR<DoacaoCreateWithoutItensInput, DoacaoUncheckedCreateWithoutItensInput>
  }

  export type ItemCreateWithoutEntradasInput = {
    quantidadeEstoque: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tipo: TipoCreateNestedOneWithoutItensInput
    tamanho: TamanhoCreateNestedOneWithoutItensInput
    saidas?: ItemDistribuicaoCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutEntradasInput = {
    id?: number
    quantidadeEstoque: number
    tipoId: number
    tamanhoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    saidas?: ItemDistribuicaoUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutEntradasInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutEntradasInput, ItemUncheckedCreateWithoutEntradasInput>
  }

  export type DoacaoUpsertWithoutItensInput = {
    update: XOR<DoacaoUpdateWithoutItensInput, DoacaoUncheckedUpdateWithoutItensInput>
    create: XOR<DoacaoCreateWithoutItensInput, DoacaoUncheckedCreateWithoutItensInput>
    where?: DoacaoWhereInput
  }

  export type DoacaoUpdateToOneWithWhereWithoutItensInput = {
    where?: DoacaoWhereInput
    data: XOR<DoacaoUpdateWithoutItensInput, DoacaoUncheckedUpdateWithoutItensInput>
  }

  export type DoacaoUpdateWithoutItensInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voluntario?: VoluntarioUpdateOneRequiredWithoutDoacoesNestedInput
  }

  export type DoacaoUncheckedUpdateWithoutItensInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    voluntarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUpsertWithoutEntradasInput = {
    update: XOR<ItemUpdateWithoutEntradasInput, ItemUncheckedUpdateWithoutEntradasInput>
    create: XOR<ItemCreateWithoutEntradasInput, ItemUncheckedCreateWithoutEntradasInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutEntradasInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutEntradasInput, ItemUncheckedUpdateWithoutEntradasInput>
  }

  export type ItemUpdateWithoutEntradasInput = {
    quantidadeEstoque?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: TipoUpdateOneRequiredWithoutItensNestedInput
    tamanho?: TamanhoUpdateOneRequiredWithoutItensNestedInput
    saidas?: ItemDistribuicaoUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutEntradasInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidadeEstoque?: IntFieldUpdateOperationsInput | number
    tipoId?: IntFieldUpdateOperationsInput | number
    tamanhoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saidas?: ItemDistribuicaoUncheckedUpdateManyWithoutItemNestedInput
  }

  export type VoluntarioCreateWithoutDistribuicoesInput = {
    nome: string
    email: string
    senha: string
    endereco?: string | null
    telefone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doacoes?: DoacaoCreateNestedManyWithoutVoluntarioInput
  }

  export type VoluntarioUncheckedCreateWithoutDistribuicoesInput = {
    id?: number
    nome: string
    email: string
    senha: string
    endereco?: string | null
    telefone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doacoes?: DoacaoUncheckedCreateNestedManyWithoutVoluntarioInput
  }

  export type VoluntarioCreateOrConnectWithoutDistribuicoesInput = {
    where: VoluntarioWhereUniqueInput
    create: XOR<VoluntarioCreateWithoutDistribuicoesInput, VoluntarioUncheckedCreateWithoutDistribuicoesInput>
  }

  export type BeneficiarioCreateWithoutDistribuicoesInput = {
    nome: string
    cpf: string
    telefone?: string | null
    endereco?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BeneficiarioUncheckedCreateWithoutDistribuicoesInput = {
    id?: number
    nome: string
    cpf: string
    telefone?: string | null
    endereco?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BeneficiarioCreateOrConnectWithoutDistribuicoesInput = {
    where: BeneficiarioWhereUniqueInput
    create: XOR<BeneficiarioCreateWithoutDistribuicoesInput, BeneficiarioUncheckedCreateWithoutDistribuicoesInput>
  }

  export type ItemDistribuicaoCreateWithoutDistribuicaoInput = {
    quantidade: number
    item: ItemCreateNestedOneWithoutSaidasInput
  }

  export type ItemDistribuicaoUncheckedCreateWithoutDistribuicaoInput = {
    id?: number
    quantidade: number
    itemId: number
  }

  export type ItemDistribuicaoCreateOrConnectWithoutDistribuicaoInput = {
    where: ItemDistribuicaoWhereUniqueInput
    create: XOR<ItemDistribuicaoCreateWithoutDistribuicaoInput, ItemDistribuicaoUncheckedCreateWithoutDistribuicaoInput>
  }

  export type ItemDistribuicaoCreateManyDistribuicaoInputEnvelope = {
    data: ItemDistribuicaoCreateManyDistribuicaoInput | ItemDistribuicaoCreateManyDistribuicaoInput[]
    skipDuplicates?: boolean
  }

  export type VoluntarioUpsertWithoutDistribuicoesInput = {
    update: XOR<VoluntarioUpdateWithoutDistribuicoesInput, VoluntarioUncheckedUpdateWithoutDistribuicoesInput>
    create: XOR<VoluntarioCreateWithoutDistribuicoesInput, VoluntarioUncheckedCreateWithoutDistribuicoesInput>
    where?: VoluntarioWhereInput
  }

  export type VoluntarioUpdateToOneWithWhereWithoutDistribuicoesInput = {
    where?: VoluntarioWhereInput
    data: XOR<VoluntarioUpdateWithoutDistribuicoesInput, VoluntarioUncheckedUpdateWithoutDistribuicoesInput>
  }

  export type VoluntarioUpdateWithoutDistribuicoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doacoes?: DoacaoUpdateManyWithoutVoluntarioNestedInput
  }

  export type VoluntarioUncheckedUpdateWithoutDistribuicoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doacoes?: DoacaoUncheckedUpdateManyWithoutVoluntarioNestedInput
  }

  export type BeneficiarioUpsertWithoutDistribuicoesInput = {
    update: XOR<BeneficiarioUpdateWithoutDistribuicoesInput, BeneficiarioUncheckedUpdateWithoutDistribuicoesInput>
    create: XOR<BeneficiarioCreateWithoutDistribuicoesInput, BeneficiarioUncheckedCreateWithoutDistribuicoesInput>
    where?: BeneficiarioWhereInput
  }

  export type BeneficiarioUpdateToOneWithWhereWithoutDistribuicoesInput = {
    where?: BeneficiarioWhereInput
    data: XOR<BeneficiarioUpdateWithoutDistribuicoesInput, BeneficiarioUncheckedUpdateWithoutDistribuicoesInput>
  }

  export type BeneficiarioUpdateWithoutDistribuicoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeneficiarioUncheckedUpdateWithoutDistribuicoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemDistribuicaoUpsertWithWhereUniqueWithoutDistribuicaoInput = {
    where: ItemDistribuicaoWhereUniqueInput
    update: XOR<ItemDistribuicaoUpdateWithoutDistribuicaoInput, ItemDistribuicaoUncheckedUpdateWithoutDistribuicaoInput>
    create: XOR<ItemDistribuicaoCreateWithoutDistribuicaoInput, ItemDistribuicaoUncheckedCreateWithoutDistribuicaoInput>
  }

  export type ItemDistribuicaoUpdateWithWhereUniqueWithoutDistribuicaoInput = {
    where: ItemDistribuicaoWhereUniqueInput
    data: XOR<ItemDistribuicaoUpdateWithoutDistribuicaoInput, ItemDistribuicaoUncheckedUpdateWithoutDistribuicaoInput>
  }

  export type ItemDistribuicaoUpdateManyWithWhereWithoutDistribuicaoInput = {
    where: ItemDistribuicaoScalarWhereInput
    data: XOR<ItemDistribuicaoUpdateManyMutationInput, ItemDistribuicaoUncheckedUpdateManyWithoutDistribuicaoInput>
  }

  export type ItemDistribuicaoScalarWhereInput = {
    AND?: ItemDistribuicaoScalarWhereInput | ItemDistribuicaoScalarWhereInput[]
    OR?: ItemDistribuicaoScalarWhereInput[]
    NOT?: ItemDistribuicaoScalarWhereInput | ItemDistribuicaoScalarWhereInput[]
    id?: IntFilter<"ItemDistribuicao"> | number
    quantidade?: IntFilter<"ItemDistribuicao"> | number
    distribuicaoId?: IntFilter<"ItemDistribuicao"> | number
    itemId?: IntFilter<"ItemDistribuicao"> | number
  }

  export type DistribuicaoCreateWithoutItensInput = {
    data?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    voluntario: VoluntarioCreateNestedOneWithoutDistribuicoesInput
    beneficiario: BeneficiarioCreateNestedOneWithoutDistribuicoesInput
  }

  export type DistribuicaoUncheckedCreateWithoutItensInput = {
    id?: number
    data?: Date | string
    voluntarioId: number
    beneficiarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DistribuicaoCreateOrConnectWithoutItensInput = {
    where: DistribuicaoWhereUniqueInput
    create: XOR<DistribuicaoCreateWithoutItensInput, DistribuicaoUncheckedCreateWithoutItensInput>
  }

  export type ItemCreateWithoutSaidasInput = {
    quantidadeEstoque: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tipo: TipoCreateNestedOneWithoutItensInput
    tamanho: TamanhoCreateNestedOneWithoutItensInput
    entradas?: ItemDoacaoCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutSaidasInput = {
    id?: number
    quantidadeEstoque: number
    tipoId: number
    tamanhoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    entradas?: ItemDoacaoUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutSaidasInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutSaidasInput, ItemUncheckedCreateWithoutSaidasInput>
  }

  export type DistribuicaoUpsertWithoutItensInput = {
    update: XOR<DistribuicaoUpdateWithoutItensInput, DistribuicaoUncheckedUpdateWithoutItensInput>
    create: XOR<DistribuicaoCreateWithoutItensInput, DistribuicaoUncheckedCreateWithoutItensInput>
    where?: DistribuicaoWhereInput
  }

  export type DistribuicaoUpdateToOneWithWhereWithoutItensInput = {
    where?: DistribuicaoWhereInput
    data: XOR<DistribuicaoUpdateWithoutItensInput, DistribuicaoUncheckedUpdateWithoutItensInput>
  }

  export type DistribuicaoUpdateWithoutItensInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voluntario?: VoluntarioUpdateOneRequiredWithoutDistribuicoesNestedInput
    beneficiario?: BeneficiarioUpdateOneRequiredWithoutDistribuicoesNestedInput
  }

  export type DistribuicaoUncheckedUpdateWithoutItensInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    voluntarioId?: IntFieldUpdateOperationsInput | number
    beneficiarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUpsertWithoutSaidasInput = {
    update: XOR<ItemUpdateWithoutSaidasInput, ItemUncheckedUpdateWithoutSaidasInput>
    create: XOR<ItemCreateWithoutSaidasInput, ItemUncheckedCreateWithoutSaidasInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutSaidasInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutSaidasInput, ItemUncheckedUpdateWithoutSaidasInput>
  }

  export type ItemUpdateWithoutSaidasInput = {
    quantidadeEstoque?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: TipoUpdateOneRequiredWithoutItensNestedInput
    tamanho?: TamanhoUpdateOneRequiredWithoutItensNestedInput
    entradas?: ItemDoacaoUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutSaidasInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidadeEstoque?: IntFieldUpdateOperationsInput | number
    tipoId?: IntFieldUpdateOperationsInput | number
    tamanhoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entradas?: ItemDoacaoUncheckedUpdateManyWithoutItemNestedInput
  }

  export type TipoCreateWithoutItensInput = {
    descricao: string
    tamanhos?: TamanhoCreateNestedManyWithoutTipoInput
  }

  export type TipoUncheckedCreateWithoutItensInput = {
    id?: number
    descricao: string
    tamanhos?: TamanhoUncheckedCreateNestedManyWithoutTipoInput
  }

  export type TipoCreateOrConnectWithoutItensInput = {
    where: TipoWhereUniqueInput
    create: XOR<TipoCreateWithoutItensInput, TipoUncheckedCreateWithoutItensInput>
  }

  export type TamanhoCreateWithoutItensInput = {
    descricao: string
    tipo: TipoCreateNestedOneWithoutTamanhosInput
  }

  export type TamanhoUncheckedCreateWithoutItensInput = {
    id?: number
    descricao: string
    tipoId: number
  }

  export type TamanhoCreateOrConnectWithoutItensInput = {
    where: TamanhoWhereUniqueInput
    create: XOR<TamanhoCreateWithoutItensInput, TamanhoUncheckedCreateWithoutItensInput>
  }

  export type ItemDoacaoCreateWithoutItemInput = {
    quantidade: number
    doacao: DoacaoCreateNestedOneWithoutItensInput
  }

  export type ItemDoacaoUncheckedCreateWithoutItemInput = {
    id?: number
    quantidade: number
    doacaoId: number
  }

  export type ItemDoacaoCreateOrConnectWithoutItemInput = {
    where: ItemDoacaoWhereUniqueInput
    create: XOR<ItemDoacaoCreateWithoutItemInput, ItemDoacaoUncheckedCreateWithoutItemInput>
  }

  export type ItemDoacaoCreateManyItemInputEnvelope = {
    data: ItemDoacaoCreateManyItemInput | ItemDoacaoCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type ItemDistribuicaoCreateWithoutItemInput = {
    quantidade: number
    distribuicao: DistribuicaoCreateNestedOneWithoutItensInput
  }

  export type ItemDistribuicaoUncheckedCreateWithoutItemInput = {
    id?: number
    quantidade: number
    distribuicaoId: number
  }

  export type ItemDistribuicaoCreateOrConnectWithoutItemInput = {
    where: ItemDistribuicaoWhereUniqueInput
    create: XOR<ItemDistribuicaoCreateWithoutItemInput, ItemDistribuicaoUncheckedCreateWithoutItemInput>
  }

  export type ItemDistribuicaoCreateManyItemInputEnvelope = {
    data: ItemDistribuicaoCreateManyItemInput | ItemDistribuicaoCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type TipoUpsertWithoutItensInput = {
    update: XOR<TipoUpdateWithoutItensInput, TipoUncheckedUpdateWithoutItensInput>
    create: XOR<TipoCreateWithoutItensInput, TipoUncheckedCreateWithoutItensInput>
    where?: TipoWhereInput
  }

  export type TipoUpdateToOneWithWhereWithoutItensInput = {
    where?: TipoWhereInput
    data: XOR<TipoUpdateWithoutItensInput, TipoUncheckedUpdateWithoutItensInput>
  }

  export type TipoUpdateWithoutItensInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    tamanhos?: TamanhoUpdateManyWithoutTipoNestedInput
  }

  export type TipoUncheckedUpdateWithoutItensInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    tamanhos?: TamanhoUncheckedUpdateManyWithoutTipoNestedInput
  }

  export type TamanhoUpsertWithoutItensInput = {
    update: XOR<TamanhoUpdateWithoutItensInput, TamanhoUncheckedUpdateWithoutItensInput>
    create: XOR<TamanhoCreateWithoutItensInput, TamanhoUncheckedCreateWithoutItensInput>
    where?: TamanhoWhereInput
  }

  export type TamanhoUpdateToOneWithWhereWithoutItensInput = {
    where?: TamanhoWhereInput
    data: XOR<TamanhoUpdateWithoutItensInput, TamanhoUncheckedUpdateWithoutItensInput>
  }

  export type TamanhoUpdateWithoutItensInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: TipoUpdateOneRequiredWithoutTamanhosNestedInput
  }

  export type TamanhoUncheckedUpdateWithoutItensInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    tipoId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemDoacaoUpsertWithWhereUniqueWithoutItemInput = {
    where: ItemDoacaoWhereUniqueInput
    update: XOR<ItemDoacaoUpdateWithoutItemInput, ItemDoacaoUncheckedUpdateWithoutItemInput>
    create: XOR<ItemDoacaoCreateWithoutItemInput, ItemDoacaoUncheckedCreateWithoutItemInput>
  }

  export type ItemDoacaoUpdateWithWhereUniqueWithoutItemInput = {
    where: ItemDoacaoWhereUniqueInput
    data: XOR<ItemDoacaoUpdateWithoutItemInput, ItemDoacaoUncheckedUpdateWithoutItemInput>
  }

  export type ItemDoacaoUpdateManyWithWhereWithoutItemInput = {
    where: ItemDoacaoScalarWhereInput
    data: XOR<ItemDoacaoUpdateManyMutationInput, ItemDoacaoUncheckedUpdateManyWithoutItemInput>
  }

  export type ItemDistribuicaoUpsertWithWhereUniqueWithoutItemInput = {
    where: ItemDistribuicaoWhereUniqueInput
    update: XOR<ItemDistribuicaoUpdateWithoutItemInput, ItemDistribuicaoUncheckedUpdateWithoutItemInput>
    create: XOR<ItemDistribuicaoCreateWithoutItemInput, ItemDistribuicaoUncheckedCreateWithoutItemInput>
  }

  export type ItemDistribuicaoUpdateWithWhereUniqueWithoutItemInput = {
    where: ItemDistribuicaoWhereUniqueInput
    data: XOR<ItemDistribuicaoUpdateWithoutItemInput, ItemDistribuicaoUncheckedUpdateWithoutItemInput>
  }

  export type ItemDistribuicaoUpdateManyWithWhereWithoutItemInput = {
    where: ItemDistribuicaoScalarWhereInput
    data: XOR<ItemDistribuicaoUpdateManyMutationInput, ItemDistribuicaoUncheckedUpdateManyWithoutItemInput>
  }

  export type TamanhoCreateWithoutTipoInput = {
    descricao: string
    itens?: ItemCreateNestedManyWithoutTamanhoInput
  }

  export type TamanhoUncheckedCreateWithoutTipoInput = {
    id?: number
    descricao: string
    itens?: ItemUncheckedCreateNestedManyWithoutTamanhoInput
  }

  export type TamanhoCreateOrConnectWithoutTipoInput = {
    where: TamanhoWhereUniqueInput
    create: XOR<TamanhoCreateWithoutTipoInput, TamanhoUncheckedCreateWithoutTipoInput>
  }

  export type TamanhoCreateManyTipoInputEnvelope = {
    data: TamanhoCreateManyTipoInput | TamanhoCreateManyTipoInput[]
    skipDuplicates?: boolean
  }

  export type ItemCreateWithoutTipoInput = {
    quantidadeEstoque: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tamanho: TamanhoCreateNestedOneWithoutItensInput
    entradas?: ItemDoacaoCreateNestedManyWithoutItemInput
    saidas?: ItemDistribuicaoCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutTipoInput = {
    id?: number
    quantidadeEstoque: number
    tamanhoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    entradas?: ItemDoacaoUncheckedCreateNestedManyWithoutItemInput
    saidas?: ItemDistribuicaoUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutTipoInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutTipoInput, ItemUncheckedCreateWithoutTipoInput>
  }

  export type ItemCreateManyTipoInputEnvelope = {
    data: ItemCreateManyTipoInput | ItemCreateManyTipoInput[]
    skipDuplicates?: boolean
  }

  export type TamanhoUpsertWithWhereUniqueWithoutTipoInput = {
    where: TamanhoWhereUniqueInput
    update: XOR<TamanhoUpdateWithoutTipoInput, TamanhoUncheckedUpdateWithoutTipoInput>
    create: XOR<TamanhoCreateWithoutTipoInput, TamanhoUncheckedCreateWithoutTipoInput>
  }

  export type TamanhoUpdateWithWhereUniqueWithoutTipoInput = {
    where: TamanhoWhereUniqueInput
    data: XOR<TamanhoUpdateWithoutTipoInput, TamanhoUncheckedUpdateWithoutTipoInput>
  }

  export type TamanhoUpdateManyWithWhereWithoutTipoInput = {
    where: TamanhoScalarWhereInput
    data: XOR<TamanhoUpdateManyMutationInput, TamanhoUncheckedUpdateManyWithoutTipoInput>
  }

  export type TamanhoScalarWhereInput = {
    AND?: TamanhoScalarWhereInput | TamanhoScalarWhereInput[]
    OR?: TamanhoScalarWhereInput[]
    NOT?: TamanhoScalarWhereInput | TamanhoScalarWhereInput[]
    id?: IntFilter<"Tamanho"> | number
    descricao?: StringFilter<"Tamanho"> | string
    tipoId?: IntFilter<"Tamanho"> | number
  }

  export type ItemUpsertWithWhereUniqueWithoutTipoInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutTipoInput, ItemUncheckedUpdateWithoutTipoInput>
    create: XOR<ItemCreateWithoutTipoInput, ItemUncheckedCreateWithoutTipoInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutTipoInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutTipoInput, ItemUncheckedUpdateWithoutTipoInput>
  }

  export type ItemUpdateManyWithWhereWithoutTipoInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutTipoInput>
  }

  export type ItemScalarWhereInput = {
    AND?: ItemScalarWhereInput | ItemScalarWhereInput[]
    OR?: ItemScalarWhereInput[]
    NOT?: ItemScalarWhereInput | ItemScalarWhereInput[]
    id?: IntFilter<"Item"> | number
    quantidadeEstoque?: IntFilter<"Item"> | number
    tipoId?: IntFilter<"Item"> | number
    tamanhoId?: IntFilter<"Item"> | number
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
  }

  export type TipoCreateWithoutTamanhosInput = {
    descricao: string
    itens?: ItemCreateNestedManyWithoutTipoInput
  }

  export type TipoUncheckedCreateWithoutTamanhosInput = {
    id?: number
    descricao: string
    itens?: ItemUncheckedCreateNestedManyWithoutTipoInput
  }

  export type TipoCreateOrConnectWithoutTamanhosInput = {
    where: TipoWhereUniqueInput
    create: XOR<TipoCreateWithoutTamanhosInput, TipoUncheckedCreateWithoutTamanhosInput>
  }

  export type ItemCreateWithoutTamanhoInput = {
    quantidadeEstoque: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tipo: TipoCreateNestedOneWithoutItensInput
    entradas?: ItemDoacaoCreateNestedManyWithoutItemInput
    saidas?: ItemDistribuicaoCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutTamanhoInput = {
    id?: number
    quantidadeEstoque: number
    tipoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    entradas?: ItemDoacaoUncheckedCreateNestedManyWithoutItemInput
    saidas?: ItemDistribuicaoUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutTamanhoInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutTamanhoInput, ItemUncheckedCreateWithoutTamanhoInput>
  }

  export type ItemCreateManyTamanhoInputEnvelope = {
    data: ItemCreateManyTamanhoInput | ItemCreateManyTamanhoInput[]
    skipDuplicates?: boolean
  }

  export type TipoUpsertWithoutTamanhosInput = {
    update: XOR<TipoUpdateWithoutTamanhosInput, TipoUncheckedUpdateWithoutTamanhosInput>
    create: XOR<TipoCreateWithoutTamanhosInput, TipoUncheckedCreateWithoutTamanhosInput>
    where?: TipoWhereInput
  }

  export type TipoUpdateToOneWithWhereWithoutTamanhosInput = {
    where?: TipoWhereInput
    data: XOR<TipoUpdateWithoutTamanhosInput, TipoUncheckedUpdateWithoutTamanhosInput>
  }

  export type TipoUpdateWithoutTamanhosInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    itens?: ItemUpdateManyWithoutTipoNestedInput
  }

  export type TipoUncheckedUpdateWithoutTamanhosInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    itens?: ItemUncheckedUpdateManyWithoutTipoNestedInput
  }

  export type ItemUpsertWithWhereUniqueWithoutTamanhoInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutTamanhoInput, ItemUncheckedUpdateWithoutTamanhoInput>
    create: XOR<ItemCreateWithoutTamanhoInput, ItemUncheckedCreateWithoutTamanhoInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutTamanhoInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutTamanhoInput, ItemUncheckedUpdateWithoutTamanhoInput>
  }

  export type ItemUpdateManyWithWhereWithoutTamanhoInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutTamanhoInput>
  }

  export type DoacaoCreateManyVoluntarioInput = {
    id?: number
    data?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DistribuicaoCreateManyVoluntarioInput = {
    id?: number
    data?: Date | string
    beneficiarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoacaoUpdateWithoutVoluntarioInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemDoacaoUpdateManyWithoutDoacaoNestedInput
  }

  export type DoacaoUncheckedUpdateWithoutVoluntarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemDoacaoUncheckedUpdateManyWithoutDoacaoNestedInput
  }

  export type DoacaoUncheckedUpdateManyWithoutVoluntarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistribuicaoUpdateWithoutVoluntarioInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    beneficiario?: BeneficiarioUpdateOneRequiredWithoutDistribuicoesNestedInput
    itens?: ItemDistribuicaoUpdateManyWithoutDistribuicaoNestedInput
  }

  export type DistribuicaoUncheckedUpdateWithoutVoluntarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    beneficiarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemDistribuicaoUncheckedUpdateManyWithoutDistribuicaoNestedInput
  }

  export type DistribuicaoUncheckedUpdateManyWithoutVoluntarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    beneficiarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistribuicaoCreateManyBeneficiarioInput = {
    id?: number
    data?: Date | string
    voluntarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DistribuicaoUpdateWithoutBeneficiarioInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voluntario?: VoluntarioUpdateOneRequiredWithoutDistribuicoesNestedInput
    itens?: ItemDistribuicaoUpdateManyWithoutDistribuicaoNestedInput
  }

  export type DistribuicaoUncheckedUpdateWithoutBeneficiarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    voluntarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemDistribuicaoUncheckedUpdateManyWithoutDistribuicaoNestedInput
  }

  export type DistribuicaoUncheckedUpdateManyWithoutBeneficiarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    voluntarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemDoacaoCreateManyDoacaoInput = {
    id?: number
    quantidade: number
    itemId: number
  }

  export type ItemDoacaoUpdateWithoutDoacaoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    item?: ItemUpdateOneRequiredWithoutEntradasNestedInput
  }

  export type ItemDoacaoUncheckedUpdateWithoutDoacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemDoacaoUncheckedUpdateManyWithoutDoacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemDistribuicaoCreateManyDistribuicaoInput = {
    id?: number
    quantidade: number
    itemId: number
  }

  export type ItemDistribuicaoUpdateWithoutDistribuicaoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    item?: ItemUpdateOneRequiredWithoutSaidasNestedInput
  }

  export type ItemDistribuicaoUncheckedUpdateWithoutDistribuicaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemDistribuicaoUncheckedUpdateManyWithoutDistribuicaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemDoacaoCreateManyItemInput = {
    id?: number
    quantidade: number
    doacaoId: number
  }

  export type ItemDistribuicaoCreateManyItemInput = {
    id?: number
    quantidade: number
    distribuicaoId: number
  }

  export type ItemDoacaoUpdateWithoutItemInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    doacao?: DoacaoUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItemDoacaoUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    doacaoId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemDoacaoUncheckedUpdateManyWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    doacaoId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemDistribuicaoUpdateWithoutItemInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    distribuicao?: DistribuicaoUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItemDistribuicaoUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    distribuicaoId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemDistribuicaoUncheckedUpdateManyWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    distribuicaoId?: IntFieldUpdateOperationsInput | number
  }

  export type TamanhoCreateManyTipoInput = {
    id?: number
    descricao: string
  }

  export type ItemCreateManyTipoInput = {
    id?: number
    quantidadeEstoque: number
    tamanhoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TamanhoUpdateWithoutTipoInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    itens?: ItemUpdateManyWithoutTamanhoNestedInput
  }

  export type TamanhoUncheckedUpdateWithoutTipoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    itens?: ItemUncheckedUpdateManyWithoutTamanhoNestedInput
  }

  export type TamanhoUncheckedUpdateManyWithoutTipoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type ItemUpdateWithoutTipoInput = {
    quantidadeEstoque?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tamanho?: TamanhoUpdateOneRequiredWithoutItensNestedInput
    entradas?: ItemDoacaoUpdateManyWithoutItemNestedInput
    saidas?: ItemDistribuicaoUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutTipoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidadeEstoque?: IntFieldUpdateOperationsInput | number
    tamanhoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entradas?: ItemDoacaoUncheckedUpdateManyWithoutItemNestedInput
    saidas?: ItemDistribuicaoUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutTipoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidadeEstoque?: IntFieldUpdateOperationsInput | number
    tamanhoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateManyTamanhoInput = {
    id?: number
    quantidadeEstoque: number
    tipoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateWithoutTamanhoInput = {
    quantidadeEstoque?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: TipoUpdateOneRequiredWithoutItensNestedInput
    entradas?: ItemDoacaoUpdateManyWithoutItemNestedInput
    saidas?: ItemDistribuicaoUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutTamanhoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidadeEstoque?: IntFieldUpdateOperationsInput | number
    tipoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entradas?: ItemDoacaoUncheckedUpdateManyWithoutItemNestedInput
    saidas?: ItemDistribuicaoUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutTamanhoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidadeEstoque?: IntFieldUpdateOperationsInput | number
    tipoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}