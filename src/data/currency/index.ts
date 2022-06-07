import { CurrencyTestnet } from './currency.testnet';
import { CurrencyMainnet } from './currency.mainnet';

const Currency = process.env.NODE_ENV === 'test' ? CurrencyTestnet : CurrencyMainnet;
export default Currency;
