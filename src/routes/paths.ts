function path(root: any, sublink: any) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = "/";

const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    app: path(ROOTS_DASHBOARD, "app"),
  },
};

export default PATH_DASHBOARD;
