import { Users, TrendingUp, Repeat, Wheat, Hammer, UtilityPole  } from 'lucide-react';
  
  const benefitOne = {
    title: "Proč zrovna my?",
    desc: "Ať už jde o mezinárodní obchod s komoditami nebo péči o vaše pozemky, jsme tu pro vás s komplexními službami a individuálním přístupem.",
    image: "/pole2.jpg",
    bullets: [
      {
        title: "Rozumíme zákazníkům",
        desc: "Služby na míru vašim potřebám.",
        icon: <Users />,
      },
      {
        title: "Odbornost a zkušenosti",
        desc: "Dlouholeté know-how v oboru pro nejlepší výsledky.",
        icon: <TrendingUp />,
      },
      {
        title: "Dlouhodobé partnerství",
        desc: "Kontinuální podpora pro váš trvalý úspěch v oboru.",
        icon: <Repeat />,
      },
    ],
  };
  
const services = {
  bullets: [
    {
      title: "Obchod komodit",
      desc: "Novým směrem v rozvoji podnikání je obchod se zemědělskými komoditami zejména určenými pro potravinářské využití. V převážné části se jedná o zahraniční obchod formou export – import.",
      icon: <Wheat />,
    },
    {
      title: "Služby",
      desc: "Poskytujeme služby v oblasti údržby veřejných prostranství, travnatých ploch, zahrad atd., jedná se o kosení nebo mulčování ploch. Služby v oblasti lesního hospodářství, těžba, přibližování, údržba, obchod a ostatní související činnosti.",
      icon: <UtilityPole />,
    },
    {
      title: "Stavební činnost",
      desc: "Poskytujeme kompletní zednické práce včetně omítek, štukování a dalších dokončovacích prací. Realizujeme montáže fasádních systémů, zateplení budov a rekonstrukce staveb.",
      icon: <Hammer />,
    },
  ],
};
  


  export {benefitOne};
  export {services};