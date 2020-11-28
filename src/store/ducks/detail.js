import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  setCurrent: ['current'],
  setDetailVisible: ['visible']
}, { prefix: 'DETAIL/' });

export const DetailTypes = Types;
export const DetailActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  current: null,
  visible: false,
});

// Reducer Functions

const setCurrent = (state, { current }) => ({ ...state, current });

const setDetailVisible = (state, { visible }) => ({ ...state, visible });

// Reducer

export const DetailReducer = createReducer(INITIAL_STATE, {
  [Types.SET_CURRENT]: setCurrent,
  [Types.SET_DETAIL_VISIBLE]: setDetailVisible,
});
