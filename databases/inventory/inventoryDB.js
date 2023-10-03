import mysql from 'mysql2'

const pool = createPool({
              host: '127.0.0.1',
              user: 'root',
              password: '',
              database: 'ez_park_inventory'
            }).promise()


