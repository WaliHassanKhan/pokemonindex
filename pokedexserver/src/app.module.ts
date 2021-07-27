import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { IndexModule } from './index/index.module';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [IndexModule,HttpModule, PokemonModule],
})
export class AppModule {}
