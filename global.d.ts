import it from './messages/it.json';

type Messages = typeof it;

declare global {
    // Use type safe message keys with `auto-complete`
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface IntlMessages extends Messages { }
}
