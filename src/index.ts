import { Writer } from 'nsqjs'
import { Reader } from 'nsqjs'


const reader = new Reader('test-topic', 'test', {
    lookupdHTTPAddresses:  "nsqlookupd:4161",//"172.18.0.2:4161", // 
    nsqdTCPAddresses: "nsqd:4150"//['172.18.0.4:4150'] //
})

reader.connect()
console.log('connected')
reader.on('message', msg => {
    console.log(`received a message ${msg.id}: ${msg.body.toString()}`)
    msg.finish()
})
reader.on('error', err => console.error(err))