

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
    path: "/admin-dashboard",
    component: "AdminDashboard",
    exact: true,
  },
  {
    path: "/choix-marqueur",
    component: "ChoixMarqueur",
    exact: true,
  },
  


];

export default routes;
