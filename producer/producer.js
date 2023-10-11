import { Kafka } from 'kafkajs'
import { randomUUID } from 'node:crypto'

import * as dotenv from 'dotenv' 

dotenv.config()

async function bootstrap() {
const kafka = new Kafka({
  clientId: 'producer',
  brokers: ['factual-lemur-11958-us1-kafka.upstash.io:9092'],
  sasl: {
    mechanism: 'scram-sha-256',
    username: process.env.UPSTASH_KAFKA_CLUSTER_USERNAME,
    password: process.env.UPSTASH_KAFKA_CLUSTER_PASSWORD,
  },
  ssl: true,
})

  const producer = kafka.producer()

  await producer.connect()
  await producer.send({
    topic: 'notifications.send-notification',
    messages: [
      {
        value: JSON.stringify({
          content: 'Nova solicitação',
          category: 'atualização de sistema',
          recipientId: randomUUID(),
        })
      }
    ]
  })

  await producer.disconnect()
}

bootstrap()