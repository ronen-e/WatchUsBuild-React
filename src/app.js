import { initializeStore } from './state/store';
import { render } from './render';

function bootstrap() {
    var jQuery = require('jquery');
    window.jQuery = window.$ = jQuery;
    require('bootstrap/dist/js/bootstrap');
    
    var store = initializeStore();
    render(store);
}
bootstrap();
