export default {
  port: parseInt(process.env.PORT, 10) || 3000,
  // 是否开启swagger
  enableSwagger: true,
  // 数据库配置
  DATABASE_CONFIG: {
    type: 'mysql',
    host: '106.53.131.11',
    port: 33061,
    username: 'root',
    password: '4MSbGwvQkGEKQwKrcd',
    database: 'notice',
    timezone: '+08:00',
    charset: 'utf8mb4',
    entities: [__dirname + '/**/entity{.ts,.js}'],
    synchronize: true,
    logging: false,
    autoLoadEntities: true,
  },
};
