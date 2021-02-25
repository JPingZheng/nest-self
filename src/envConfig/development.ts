export default {
  port: parseInt(process.env.PORT, 10) || 3000,
  // 是否开启swagger
  enableSwagger: true,
  // 数据库配置
  DATABASE_CONFIG: {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    timezone: '+08:00',
    charset: 'utf8mb4',
    //entities: [__dirname + '/**/entity{.ts,.js}'],
    synchronize: true,
    logging: false,
    autoLoadEntities: true,
  },
};
