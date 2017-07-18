import { Model } from 'redux-orm';

export class Todo extends Model {}
// Note that the modelName will be used to resolve
// relations!
Todo.modelName = 'Todo';

export class Tag extends Model {
}
Tag.modelName = 'Tag';
Tag.backend = {
    idAttribute: 'name';
};

export class User extends Model {}
User.modelName = 'User';
