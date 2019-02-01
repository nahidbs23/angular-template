import { ApiCommonMessage } from '../Models/ApiCommonMessage';
import { TestEntity } from '../models/test.model';
import { Mapper } from './mapper';

export class TestRepoMapper extends Mapper<ApiCommonMessage, TestEntity> {

    constructor() {
        super();
    }

    public mapFrom(param: ApiCommonMessage): TestEntity {
        return {
            completed: false,
            id: 1,
            title: param.Content,
            userId: 3
        };
    }

    public mapTo(param: TestEntity): ApiCommonMessage {
        return {
            Content: param.title,
            FormName: param.userId.toString(),
            SessionId: param.id.toString(),
            UserName: param.title,
            ModuleName: param.completed ? 'Complete' : 'Incomplete'
        };
    }
}
