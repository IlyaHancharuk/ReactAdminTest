
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { dataProvider } from './dataProvider';
import { UserList } from './users';
import { PostCreate, PostEdit, PostList } from './posts';
import { Dashboard } from './Dashboard';
import { authProvider } from './authProvider';

export const App = () => (
    <Admin
        authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard}
	>
        <Resource name='users' list={UserList} icon={UserIcon} recordRepresentation='name' />
        <Resource name="posts" list={PostList} icon={PostIcon} edit={PostEdit} create={PostCreate} />
    </Admin>
)
