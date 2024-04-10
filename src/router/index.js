import {createRouter,createWebHistory} from "vue-router";
import Vault from "../views/Vault.vue";
import Quiz from "../views/Quiz.vue";
import Questions from "../views/quizzes/Questions.vue";
import NotFound from "../views/NotFound.vue";
import Results from "../views/quizzes/Results.vue";
import About from "../views/About.vue";

const routes = [
    {
      path: "/",
      name: "Home",
      component: Vault,
    },
    {
        path: "/home",
        redirect: "/"
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/info",
        redirect: "/about"
    },
    {
        path: "/quizzes",
        redirect: "/",
    },
    {
        path: "/quiz/:id([1-5])",
        name: "Quiz",
        component: Quiz,
        children: [
            {
                path: "",
                name: "Questions",
                component: Questions,
            },
            {
                path: "results",
                name: "Results",
                component: Results,
            }
        ]
    },
    {
        path: "/:catchAll(.*)*",
        name: "NotFound",
        component: NotFound,
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})


export default router