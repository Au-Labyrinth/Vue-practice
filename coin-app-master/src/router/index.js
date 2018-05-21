import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Market = (resolve) => {
  import('src/components/market/market').then((module) => {
    resolve(module)
  })
}

const Deal = (resolve) => {
  import('src/components/deal/deal').then((module) => {
    resolve(module)
  })
}

const Wallet = (resolve) => {
  import('src/components/wallet/wallet').then((module) => {
    resolve(module)
  })
}

const BTC = (resolve) => {
  import('src/components/BTC/BTC').then((module) => {
    resolve(module)
  })
}

const C2C = (resolve) => {
  import('src/components/C2C/C2C').then((module) => {
    resolve(module)
  })
}

const USDT = (resolve) => {
  import('src/components/USDT/USDT').then((module) => {
    resolve(module)
  })
}

const Search = (resolve) => {
  import('src/components/search/search').then((module) => {
    resolve(module)
  })
}

const User = (resolve) => {
  import('src/components/user/user').then((module) => {
    resolve(module)
  })
}

const Cover = (resolve) => {
  import('src/components/cover/cover').then((module) => {
    resolve(module)
  })
}

const Login = (resolve) => {
  import('src/components/login/login').then((module) => {
    resolve(module)
  })
}

const Regist = (resolve) => {
  import('src/components/regist/regist').then((module) => {
    resolve(module)
  })
}

const Forgot = (resolve) => {
  import('src/components/forgot/forgot').then((module) => {
    resolve(module)
  })
}

const Buy = (resolve) => {
  import('src/components/buy/buy').then((module) => {
    resolve(module)
  })
}

const Sale = (resolve) => {
  import('src/components/sale/sale').then((module) => {
    resolve(module)
  })
}

const Commit = (resolve) => {
  import('src/components/commit/commit').then((module) => {
    resolve(module)
  })
}

const History = (resolve) => {
  import('src/components/history/history').then((module) => {
    resolve(module)
  })
}

const CommitAllOrder = (resolve) => {
  import('src/components/commit-all-order/commit-all-order').then((module) => {
    resolve(module)
  })
}

const CommitBuyOrder = (resolve) => {
  import('src/components/commit-buy-order/commit-buy-order').then((module) => {
    resolve(module)
  })
}

const CommitSaleOrder = (resolve) => {
  import('src/components/commit-sale-order/commit-sale-order').then((module) => {
    resolve(module)
  })
}

const HistoryAllOrder = (resolve) => {
  import('src/components/history-all-order/history-all-order').then((module) => {
    resolve(module)
  })
}

const HistoryBuyOrder = (resolve) => {
  import('src/components/history-buy-order/history-buy-order').then((module) => {
    resolve(module)
  })
}

const HistorySaleOrder = (resolve) => {
  import('src/components/history-sale-order/history-sale-order').then((module) => {
    resolve(module)
  })
}

const Pay = (resolve) => {
  import('src/components/pay/pay').then((module) => {
    resolve(module)
  })
}

const Payto = (resolve) => {
  import('src/components/payto/payto').then((module) => {
    resolve(module)
  })
}

const Bill = (resolve) => {
  import('src/components/bill/bill').then((module) => {
    resolve(module)
  })
}

const AllRecord = (resolve) => {
  import('src/components/all-record/all-record').then((module) => {
    resolve(module)
  })
}

const PayRecord = (resolve) => {
  import('src/components/pay-record/pay-record').then((module) => {
    resolve(module)
  })
}

const WithdrawRecord = (resolve) => {
  import('src/components/withdraw-record/withdraw-record').then((module) => {
    resolve(module)
  })
}

const Withdraw = (resolve) => {
  import('src/components/withdraw/withdraw').then((module) => {
    resolve(module)
  })
}

const Withdrawto = (resolve) => {
  import('src/components/withdrawto/withdrawto').then((module) => {
    resolve(module)
  })
}

const Security = (resolve) => {
  import('src/components/security/security').then((module) => {
    resolve(module)
  })
}

const Password = (resolve) => {
  import('src/components/password/password').then((module) => {
    resolve(module)
  })
}

const Certification = (resolve) => {
  import('src/components/certification/certification').then((module) => {
    resolve(module)
  })
}

const Google = (resolve) => {
  import('src/components/google/google').then((module) => {
    resolve(module)
  })
}

const CurrencySet = (resolve) => {
  import('src/components/currency-set/currency-set').then((module) => {
    resolve(module)
  })
}

const Enjoy = (resolve) => {
  import('src/components/enjoy/enjoy').then((module) => {
    resolve(module)
  })
}

const NoConcern = (resolve) => {
  import('src/components/no-concern/no-concern').then((module) => {
    resolve(module)
  })
}

const AboutUs = (resolve) => {
  import('src/components/aboutUs/aboutUs').then((module) => {
    resolve(module)
  })
}


export default new Router({
  routes: [
  	{
  		path: '/',
  		redirect: '/cover'
  	},
    {
      path: '/market',
      redirect: '/market/BTC',
      component: Market,
      children: [
        {
          path: 'BTC',
          component: BTC
        },
        {
          path: 'C2C',
          component: C2C
        },
        {
          path: 'USDT',
          component: USDT
        }
      ]
    },
    {
    	path: '/deal',
      redirect: '/deal/buy',
    	component: Deal,
      children: [
        {
          path: 'buy',
          component: Buy
        },
        {
          path: 'sale',
          component: Sale
        },
        {
          path: 'commit',
          redirect: 'commit/all-order',
          component: Commit,        
          children: [
            {
              path: 'all-order',
              component: CommitAllOrder
            },
            {
              path: 'buy-order',
              component: CommitBuyOrder
            },
            {
              path: 'sale-order',
              component: CommitSaleOrder
            }
          ]
        },
        {
          path: 'history',
          redirect: 'history/all-order',
          component: History,        
          children: [
            {
              path: 'all-order',
              component: HistoryAllOrder
            },
            {
              path: 'buy-order',
              component: HistoryBuyOrder
            },
            {
              path: 'sale-order',
              component: HistorySaleOrder
            }
          ]
        }
      ]
    },
    {
    	path: '/wallet',
    	component: Wallet,
      meta: {
        noHeader: true
      }
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/cover',
      component: Cover
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/regist',
      component: Regist
    },
    {
      path: '/forgot',
      component: Forgot
    },
    {
      path: '/pay',
      component: Pay
    },
    {
      path: '/payto',
      component: Payto
    },
    {
      path: '/bill',
      redirect: '/bill/all-record',
      component: Bill,
      children: [
        {
          path: 'all-record',
          component: AllRecord
        },
        {
          path: 'pay-record',
          component: PayRecord
        },
        {
          path: 'withdraw-record',
          component: WithdrawRecord
        }
      ]
    },
    {
      path: '/withdraw',
      component: Withdraw
    },
    {
      path: '/withdrawto',
      component: Withdrawto
    },
    {
      path: '/security',
      component: Security
    },
    {
      path: '/password',
      component: Password
    },
    {
      path: '/certification',
      component: Certification
    },
    {
      path: '/google',
      component: Google
    },
    {
      path: '/currency-set',
      component: CurrencySet,
      redirect: '/currency-set/enjoy',
      children: [
        {
          path: 'enjoy',
          component: Enjoy
        },
        {
          path: 'no-concern',
          component: NoConcern
        }
      ]
    },
    {
      path: '/aboutUs',
      component: AboutUs
    }
  ]
})
