import { List as newList } from 'immutable';
var defaultParser = (item) => item;

function addToList({ parser = defaultParser, max }) {
    return function _addToList(oldItems, newItems) {
        var items = [ ...newItems, ...oldItems.toArray() ]
            .filter(function filterById(a, index, arr) {
                return arr.findIndex(b => b.id === a.id) === index;
            });

        if (typeof max === 'number') {
            items = items.slice(0, max);
        }

        return newList(items.map(item => parser(item)));
    };
}

export default addToList;
