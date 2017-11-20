import { Connect , SimpleSigner} from 'uport-connect'

//export let uport = new Connect('TruffleBox')
export let uport = new Connect('carbon4all', {
      clientId: '2ow6XU3pnZNwcgQPyvqaSRBKm48CqCjuceD',
      network: 'rinkeby',
      signer: SimpleSigner('303d10c2c6f8df3c42b68abe1df64a3c9b08cd2d0bdc36bc6d42bede04625869')
    })

export const web3 = uport.getWeb3()