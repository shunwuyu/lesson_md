require('env2')('./.env')

const { env } = process;

module.exports = {
  host: env.HOST,
  port: env.PORT
}