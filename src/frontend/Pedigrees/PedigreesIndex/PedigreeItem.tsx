import React from 'react'
import { Pedigree } from '../../../db/Types/Entities'
import { Card } from '@chakra-ui/react'

export const PedigreeItem = ({pedigree}:{pedigree:Pedigree}) => {
  return (
    <Card>
        {pedigree.name}
    </Card>
  )
}
