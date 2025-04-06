import { IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class GetUsersParamsDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  id?: number;

  limit: number;

  page: number;
}
