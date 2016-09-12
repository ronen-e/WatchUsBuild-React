var defaultParse = (item) => item;

function addToList({ parse = defaultParse, max }) {
    return function _addToList(oldItems, newItems) {
    	var items = [ ...newItems, ...oldItems.toArray() ]
    		.filter(function filterById(a, index, arr) {
                return arr.findIndex(b => b.id === a.id) === index;
            });

        if (typeof max === 'number') {
            items = items.slice(0, max);
        }

    	return newList(items.map(item => parse(item)));
    }
}

export default addToList;
