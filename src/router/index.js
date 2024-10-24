import { createRouter, createWebHistory } from "vue-router";
import Cookies from "js-cookie";
import store from "@/store";

import Dashboard from "@/views/Dashboard.vue";
import PlayerSelection from "@/views/PlayerProfile.vue";
import Reports from "@/views/Reports.vue";
import Ratings from "@/views/Ratings.vue";
import Settings from "@/views/Settings.vue";
import Login from "@/views/Auth/Login.vue";
import Step2 from "@/views/Auth/Step2.vue";
import ADRegister from "@/views/Auth/ADRegister.vue";
import ADProfile from "@/views/Auth/ADProfile.vue";
import ADProfileSetup from "@/views/Auth/ADProfileSetup.vue";
import Landing from "@/views/Auth/Landing.vue";
import ADFProfile from "@/views/Auth/ADFProfile.vue";
import SignUp from "@/views/Auth/SignUp.vue";
import ManagerOnboarding from "@/views/Auth/ManagerOnboarding.vue";
import ManagerProfileSetup from "@/views/Auth/ManagerProfileSetup.vue";
import ADOtp from "@/views/Auth/ADotp.vue";
import ForgotPassword from "@/views/Auth/ForgotPassword.vue";
import VerifyOtp from "@/views/Auth/VerifyOtp.vue";
import ResetPassword from "@/views/Auth/ResetPassword.vue";
import Logout from "@/views/Auth/Logout.vue";
import ActivateAccount from "@/views/Auth/ActivateAccount.vue";
import Users from "@/views/Users.vue";
import PlayerComparison from "@/views/PlayerComparison.vue";
import PlayerComparisonResult from "@/views/PlayerComparisonResult.vue"

const routes = [
  {
    path: "/",
    name: "Welcome To Edge 3",
    component: Landing,
    beforeEnter: (to, from, next) => {
      const token = store.getters["auth/token"] || Cookies.get("authToken");
      if (token) {
        next({ name: "Step 2" });
      } else {
        next();
      }
    },
  },
  {
    path: "/activate-account",
    name: "Activate Account",
    component: ActivateAccount,
  },
  {
    path: "/dashboard",
    name: " Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/",
    name: " Home",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/ratings",
    name: "Dashboard",
    component: Ratings,
    meta: { requiresAuth: true },
  },
  {
    path: "/player-selection/:id",
    name: "Player Selection",
    component: PlayerSelection,
    meta: { requiresAuth: true },
  },
  {
    path: "/reports",
    name: "Reports - Search",
    component: Ratings,
    meta: { requiresAuth: true },
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
    meta: { requiresAuth: true },
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    meta: { requiresAuth: true },
  },
  {
    path: "/step-two",
    name: "Step 2",
    component: Step2,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/ad-register",
    name: "AD - GM Register",
    component: ADRegister,
  },
  {
    path: "/ad-profile",
    name: "AD - GM Profile",
    component: ADProfile,
  },
  {
    path: "/ad-profile-setup",
    name: "AD - GM Profile Setup",
    component: ADProfileSetup,
  },
  {
    path: "/landing",
    name: "Edge 3 Landing",
    component: Landing,
  },
  {
    path: "/adf-profile",
    name: "ADFProfile",
    component: ADFProfile,
  },
  {
    path: "/signup",
    name: "Sign Up",
    component: SignUp,
  },
  {
    path: "/manager-onboarding",
    name: "ManagerOnboarding",
    component: ManagerOnboarding,
  },
  {
    path: "/manager-setup",
    name: "Assistant Manager Onboarding",
    component: ManagerProfileSetup,
  },
  {
    path: "/otp",
    name: "Validate OTP",
    component: ADOtp,
  },
  {
    path: "/forgot-password",
    name: "Forget Password",
    component: ForgotPassword,
  },
  {
    path: "/verify-otp",
    name: "OTP Verification",
    component: VerifyOtp,
  },
  {
    path: "/reset-password",
    name: "Reset Password",
    component: ResetPassword,
  },
  {
    path: "/player-comparison",
    name: "Player Comparison",
    component: PlayerComparison
  },
  {
    path: "/player-comparison-result",
    name: "Player Comparison Result ",
    component: PlayerComparisonResult
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.name;

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const token = store.getters["auth/token"] || Cookies.get("authToken");

    if (!token) {
      next({ name: "Login", query: { redirect: to.fullPath } });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
