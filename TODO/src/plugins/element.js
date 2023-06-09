import Vue from 'vue'
import {
  Button,
  Container,
  Header,
  Aside,
  Footer,
  Main,
  Message,
  Alert,
  Form,
  FormItem,
  Card,
  Input,
  Row,
  Col,
  Image,
  Icon,
  Menu,
  MenuItem,
  Dialog,
  RadioButton,
  RadioGroup,
  Notification,
  upload
} from 'element-ui'

Vue.use(Input)
Vue.use(Form)
Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Footer)
Vue.use(Main)
Vue.use(Alert)
Vue.use(Icon)

Vue.use(FormItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Image)

Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Dialog)
Vue.use(RadioButton)
Vue.use(RadioGroup)
Vue.use(upload)

Vue.prototype.$message = Message
Vue.prototype.$notify = Notification
