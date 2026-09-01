import { Module } from '@nestjs/common';
import { MemberResolver } from './member.resolver';
import { MemberService } from './member.service';
import { MongooseModule } from '@nestjs/mongoose';
import MemeberSchema from '../../schemas/Member.model';
import { AuthModule } from '../auth/auth.module';
import { ViewModule } from '../view/view.module';

@Module({
  imports: [         
     MongooseModule.forFeature([
      {
        name: "Member",
         schema: MemeberSchema,
         },
        ]), 
        AuthModule,
        ViewModule,
      ],
  providers: [MemberResolver, MemberService],
    exports: [MemberService],
})
export class MemberModule {}
