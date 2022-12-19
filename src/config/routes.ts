function _createEnum<T extends {[P in keyof T]: P}>(o: T) {
  return o;
}

const navigationRoutes = _createEnum({
  detail: 'detail',
  list: 'list',
});

export default navigationRoutes;
