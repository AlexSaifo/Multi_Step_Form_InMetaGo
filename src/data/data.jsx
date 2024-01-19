import iconArcade from '../assets/images/icon-arcade.svg'
import iconAdvanced from '../assets/images/icon-advanced.svg'
import iconPro from '../assets/images/icon-pro.svg'
import FormPersonal from '../pages/PersonalPage'
import FormPlan from '../pages/PlanPage'
import FormAddons from '../pages/AddonsPage'
import FormSummary from '../pages/SummaryPage'

export const addOns = [
    {
      name: 'Online service',
      description: 'Access to multiplayer games',
      price: {
        monthly: 1,
        yearly: 10
      }
    },
    {
      name: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: {
        monthly: 2,
        yearly: 20
      }
    },
    {
      name: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: {
        monthly: 2,
        yearly: 20
      }
    }
  ]
  
export  const inputs = [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      placeholder: 'e.g. Ali Saifo'
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email Address',
      placeholder: 'e.g. saifoa8816@gmail.com'
    },
    {
      name: 'phone',
      type: 'tel',
      label: 'Phone Number',
      placeholder: 'e.g. +963 938603698'
    }
  ]



export const plans = [
  {
    name: 'Arcade',
    img: iconArcade,
    price: {
      monthly: 1,
      yearly: 10
    }
  },
  {
    name: 'Advanced',
    img: iconAdvanced,
    price: {
      monthly: 6,
      yearly: 60
    }
  },
  {
    name: 'Pro',
    img: iconPro,
    price: {
      monthly: 10,
      yearly: 100
    }
  }
]

export const pages = [
    {
      component: <FormPersonal />,
      text: 'Your info'
    },
    {
      component: <FormPlan />,
      text: 'Select plan'
    },
    {
      component: <FormAddons />,
      text: 'Add-ons'
    },
    {
      component: <FormSummary />,
      text: 'Summary'
    }
  ]