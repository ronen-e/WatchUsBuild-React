import { initializeStore } from './state/store';
import { render } from './render';

function bootstrap() {
    var store = initializeStore();
    render(store);
}
bootstrap();
