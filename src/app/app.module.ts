import { Module } from '@nestjs/common';
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path"
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { UserResolver } from "../graphql/resolvers/user.resolver";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // playground: false,
      sortSchema:true,
      autoSchemaFile: join(process.cwd(), 'src/config/schema.gql'),
      // definitions: {
      //   path: join(process.cwd(), 'src/config/schema.gql'),
      // },
      // plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],

  providers:[UserResolver]
})
export class AppModule {}
