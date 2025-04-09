

const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: "/login",
    component: "Login1",
    exact: true,
  },
  {
    path: "/archer",
    component: "Archer",
    exact: true,
  },
  {
    path: "/administrateur",
    component: "Administrateur",
    exact: true,
  },
  {
    path: "/admindashboard",
    component: "AdminDashboard",
    exact: true,
  },


];

export default routes;
