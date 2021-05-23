import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { reducerUtils } from '../lib/asyncUtils';
import CategoryEventList from '../component/CategoryEventList';
import { getCategoryListsById } from '../modules/posts';

const CategoryEventListContainer = ({ cId }) => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector(
    (state) => state.posts.post[cId] || reducerUtils.initial(),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(getCategoryListsById(cId));
  }, [cId, dispatch]);

  if (loading && !data) return '로딩중';
  if (error) return 'error';
  if (!data) return null;
  return <CategoryEventList lists={data} />;
};
export default CategoryEventListContainer;
