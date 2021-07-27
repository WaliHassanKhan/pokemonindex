import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { IndexController } from './index.controller';
import { IndexService } from './index.service';

@Module({
  imports: [HttpModule],
  controllers: [IndexController],
  providers: [IndexService]
})
export class IndexModule {}
