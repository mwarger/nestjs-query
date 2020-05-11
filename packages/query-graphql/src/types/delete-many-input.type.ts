import { Filter, Class } from '@nestjs-query/core';
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmptyObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { FilterType } from './query';

export interface DeleteManyInputType<T> {
  filter: Filter<T>;
}

/**
 * The abstract input type or delete many endpoints.
 * @param DTOClass - The class the delete many input type is for. This will be used to create FilterType.
 */
export function DeleteManyInputType<DTO>(DTOClass: Class<DTO>): Class<DeleteManyInputType<DTO>> {
  const F = FilterType(DTOClass);
  @InputType({ isAbstract: true })
  class DeleteManyInput implements DeleteManyInputType<DTO> {
    @IsNotEmptyObject()
    @Type(() => F)
    @ValidateNested()
    @Field(() => F, { description: 'Filter to find records to delete' })
    filter!: Filter<DTO>;
  }
  return DeleteManyInput;
}