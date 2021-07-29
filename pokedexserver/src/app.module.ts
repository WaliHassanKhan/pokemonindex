import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { IndexModule } from './index/index.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [IndexModule,HttpModule, PokemonModule, SearchModule],
})
export class AppModule {}
