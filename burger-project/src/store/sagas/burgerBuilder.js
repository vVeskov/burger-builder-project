import { put } from 'redux-saga/effects';
import axios from '../../axios-order';
import * as actions from '../actions/index';

export function* initIngredientsSaga(action) {
    const getIngredientsUrl = 'https://react-burger-builder-2e795.firebaseio.com/ingredients.json';
    try {
        const response = yield axios.get(getIngredientsUrl)
        yield put(actions.setIngredients(response.data))
    } catch (error) {
        yield put(actions.fetchIngredientsFailed())
    }
} 