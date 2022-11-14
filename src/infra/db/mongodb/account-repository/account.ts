import { MongoHelper } from './../helpers/mongo-helper'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { AddAccountRepository } from './../../../../data/protocols/add-account-repository'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<any> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    return result.insertedId !== null
  }
}
