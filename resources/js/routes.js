import Home from './components/Home.vue';
import SobreNos from './components/SobreNos.vue';
import SimuladorProtese from './components/SimuladorProtese.vue';

const routes = [
      { path: '/', component: Home },
      { path: '/quem-somos', component: SobreNos },
      { path: '/simuladorProtese', component: SimuladorProtese },
]

export default routes