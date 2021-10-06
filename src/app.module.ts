import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppGatewayModule } from './gateway/app.gateway.module';
import { PrismaModule } from './prisma/prisma/prisma.module';
import { ReportModule } from './report/report.module';
/*import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaModule } from './kafka/kafka.module';
import { TestKafkaModule } from './test-kafka/test-kafka.module';*/
import { UserRestModule } from './user-rest/user-rest.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      cors: {
        origin: 'http://localhost:8080',
        credentials: true,
      },
      introspection: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    AppGatewayModule,
    PrismaModule,
    ReportModule,
    // KafkaModule,
    UserRestModule,
    // TestKafkaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
