import {rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
    const comparator = createComparison(
        rules.skipEmptyTargetValues, // стандартное правило для пропуска пустых значений
        rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false) // поиск по нескольким полям
    );
    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
                if (action && action.type === 'search' && action.payload !== undefined) {
            const searchTerm = action.payload.toLowerCase();
            return data.filter(item => comparator(item, searchTerm));
        }
        return data;
    }
}