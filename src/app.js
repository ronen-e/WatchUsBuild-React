import { initializeStore } from './state/store';
import { render } from './render';
import './vendor/bootstrap';

function bootstrap() {
    var store = initializeStore();
    render(store);
}
bootstrap();
