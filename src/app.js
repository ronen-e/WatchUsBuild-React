import { initializeStore } from './state/store';
import { render } from './render.jsx';

function bootstrap() {
    var store = initializeStore();
    render(store);
}
bootstrap();
