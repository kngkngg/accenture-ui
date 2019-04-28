
import React from 'react';
import ReactDom from 'react-dom';
import App from './App.js';
import Home from '../home/home.js';
import Login from '../login/login.js';
import Register from '../login/register.js';
import UserRequest from '../dashboard/user-request.js';
import UserDashboard from '../dashboard/user-dashboard.js';
import Dashboard from '../admin/dashboard/dashboard.js';
import AdminDashboard from '../admin/dashboard/admin-dashboard.js';
import Requests from '../admin/dashboard/requests.js';
import Request from '../admin/dashboard/request.js';
import RequestList from '../admin/dashboard/requestList.js';
import UserRequests from '../dashboard/user-requests.js';
import TestRenderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div =document.createElement('div');
  ReactDom.render(<App />,div);

});

test('Snapshot Testing: HomePage', () => {
  const tree = shallow(<Home />);
  expect(tree).toMatchSnapshot();
});
test('Snapshot Testing: LoginPage', () => {
  const tree = shallow(<Login />);
  expect(tree).toMatchSnapshot();
});
test('Snapshot Testing: RegisterPage', () => {
  const tree = shallow(<Register />);
  expect(tree).toMatchSnapshot();
});
test('Snapshot Testing: UserRequest Page', () => {
  const tree = shallow(<UserRequest />);
  expect(tree).toMatchSnapshot();
});
test('Snapshot Testing: UserDashboard Page', () => {
  const tree = shallow(<UserDashboard />);
  expect(tree).toMatchSnapshot();
});
test('Snapshot Testing: AdminDashboard Page', () => {
  const tree = shallow(<AdminDashboard />);
  expect(tree).toMatchSnapshot();
});
test('Snapshot Testing: Requests Page', () => {
  const tree = shallow(<Requests />);
  expect(tree).toMatchSnapshot();
});
test('Snapshot Testing: Request', () => {
  const tree = shallow(<Request />);
  expect(tree).toMatchSnapshot();
});
test('Snapshot Testing: UserRequests', () => {
  const tree = shallow(<UserRequests />);
  expect(tree).toMatchSnapshot();
});
describe('Unit Testing: HomePage', () => {
  let wrapper;
  beforeEach(() => {wrapper = shallow(<Home />);});
  it('contain Teamwork section',() => {
    expect(wrapper.find('Image.teamwork-image'));
  });
  it('contain AboutUs section',() => {
    expect(wrapper.find('Image.aboutus-image'));
  });
  it('contain Business section',() => {
    expect(wrapper.find('Image.business-image'));
  });
  it('contain first UseCase section',() => {
    expect(wrapper.find('Image.usecase1-image'));
  });
  it('contain second UseCase section',() => {
    expect(wrapper.find('Image.usecase2image'));
  });
  it('contain third UseCase section',() => {
    expect(wrapper.find('Image.usecase3-image'));
  });
  it('contain CaseStudy section',() => {
    expect(wrapper.find('Image.casestudy-image'));
  });
  it('contain Footer section',() => {
    expect(wrapper.find('Image.footer-image'));
  });
});
describe('Unit Testing: Login Form', () => {
  let wrapper;
  beforeEach(() => {wrapper = shallow(<Login />);});
  it('contain modal login window',() => {
    expect(wrapper.find('Modal.loginwindow'));
  });
  it('contain modal login window close button',() => {
    expect(wrapper.find('Modal.Header.loginclosebutton'));
  });
  it('contain modal login window header',() => {
    expect(wrapper.find('Modal.Title.formtitle'));
  });
  it('contain modal login window email label',() => {
    expect(wrapper.find('Modal.Label.loginEmail'));
  });
  it('contain modal login window email input',() => {
    expect(wrapper.find('Modal.Control.loginemailinput'));
  });
  it('contain modal login window password label',() => {
    expect(wrapper.find('Modal.Label.loginpassword'));
  });
  it('contain modal login window password input',() => {
    expect(wrapper.find('Modal.Label.loginpasswordinput'));
  });
  it('contain modal login window submit button',() => {
    expect(wrapper.find('Button.loginsubmit'));
  });
});
describe('Unit Testing: Register Form', () => {
  let wrapper;
  beforeEach(() => {wrapper = shallow(<Register />);});
  it('contain modal register window',() => {
    expect(wrapper.find('Modal.registerwindow'));
  });
  it('contain modal register window close button',() => {
    expect(wrapper.find('Modal.Header.registerwindowclosebutton'));
  });
  it('contain modal register window header',() => {
    expect(wrapper.find('Modal.Title.registerwindowtitle'));
  });
  it('contain modal register window form details',() => {
    expect(wrapper.find('Modal.Label.registerwindowdetails'));
  });

});
describe('Unit Testing: User Dashboard', () => {
  let wrapper;
  beforeEach(() => {wrapper = shallow(<UserRequest />);});
  it('contain user ticket table',() => {
    expect(wrapper.find('tr.usertickets'));
  });
  it('ticket table contain checkbox',() => {
    expect(wrapper.find('td.userticketscheckbox'));
  });
  it('ticket table contain status',() => {
    expect(wrapper.find('td.userticketsstatus'));
  });
  it('ticket table contain subject',() => {
    expect(wrapper.find('td.userticketssubject'));
  });
  it('ticket table contain requester',() => {
    expect(wrapper.find('td.userticketsrequester'));
  });
  it('ticket table contain date',() => {
    expect(wrapper.find('td.userticketsdate'));
  });
  it('ticket table contain topic',() => {
    expect(wrapper.find('td.userticketstopic'));
  });
  it('ticket table contain prioirity',() => {
    expect(wrapper.find('td.userticketspriority'));
  });
  it('contain reply window',() => {
    expect(wrapper.find('Modal.replyticket'));
  });
  it('reply window contain admin image',() => {
    expect(wrapper.find('Image.accenture-logo-ticket'));
  });
  it('reply window contain title',() => {
    expect(wrapper.find('div.subject-title'));
  });
  it('reply window contain ticket information',() => {
    expect(wrapper.find('div.ticket-info'));
  });
  it('reply window contain reply box',() => {
    expect(wrapper.find('form.replybox'));
  });
  it('reply window contain button to change status',() => {
    expect(wrapper.find('div.convo-submit-button'));
  });
  it('reply window contain publish response button',() => {
    expect(wrapper.find('Button.submitbutton'));
  });it('reply window contain close button',() => {
    expect(wrapper.find('Modal.Header.replyticketclosebutton'));
  });

});
describe('Unit Testing: User Dashboard - Navigation', () => {
  let wrapper;
  beforeEach(() => {wrapper = shallow(<UserDashboard />);});
  it('contain user dashboard navigation bar',() => {
    expect(wrapper.find('Navbar.navbar'));
  });
  it('contain ticket creation link',() => {
    expect(wrapper.find('Nav.mr-auto'));
  });
  it('contain logout button',() => {
    expect(wrapper.find('a.userlogout'));
  });
  it('contain user tickets',() => {
    expect(wrapper.find('div.usertable'));
  });

});
describe('Unit Testing: Admin Dashboard - Statistics', () => {
  let wrapper;
  beforeEach(() => {wrapper = shallow(<Dashboard />);});
  it('contain admin dashboard container',() => {
    expect(wrapper.find('div.dashboard-container'));
  });

  it('contain first stats card',() => {
    expect(wrapper.find('div.tickets-info'));
  });
  it('contain second stats card',() => {
    expect(wrapper.find('div.ticket-info2'));
  });
  it('contain third stats card',() => {
    expect(wrapper.find('div.ticket-info3'));
  });

  it('contain fourth stats card',() => {
    expect(wrapper.find('div.ticket-info4'));
  });
  it('contain graphs',() => {
    expect(wrapper.find('Card.graph-card'));
  });


});
describe('Unit Testing: Admin Dashboard - Navigation', () => {
  let wrapper;
  beforeEach(() => {wrapper = shallow(<AdminDashboard />);});
  it('contain admin dashboard navigation',() => {
    expect(wrapper.find('Nav.mr-auto'));
  });

  it('contain view tickets link',() => {
    expect(wrapper.find('Nav.Link.adminrequest'));
  });
  it('contain view statistics link',() => {
    expect(wrapper.find('Nav.Link.admindashboard'));
  });
  it('contain admin logout button',() => {
    expect(wrapper.find('a.adminlogout'));
  });

});
describe('Unit Testing: Admin Dashboard - Tickets', () => {
  let wrapper;
  beforeEach(() => {wrapper = shallow(<Requests />);});
  it('contain requests table container',() => {
    expect(wrapper.find('div.ticket-info-container'));
  });
  it('contain requests table name',() => {
    expect(wrapper.find('div.tickets-name'));
  });

  it('contain requests table number',() => {
    expect(wrapper.find('div.num-tickets'));
  });
  it('contain requests table',() => {
    expect(wrapper.find('div.tickets-table'));
  });
  it('contain requests table header',() => {
    expect(wrapper.find('thead.ticket-header'));
  });
  it('contain requests table checkbox',() => {
    expect(wrapper.find('th.ticketcheckbox'));
  });
  it('contain requests table subject',() => {
    expect(wrapper.find('th.ticketsubject'));
  });
  it('contain requests table requester',() => {
    expect(wrapper.find('th.ticketrequester'));
  });
  it('contain requests table requested',() => {
    expect(wrapper.find('th.ticketrequested'));
  });
  it('contain requests table topic',() => {
    expect(wrapper.find('th.tickettopic'));
  });
  it('contain requests table priority',() => {
    expect(wrapper.find('th.ticketpriority'));
  });
  it('contain navigation unsolved ticket',() => {
    expect(wrapper.find('Nav.Link.ticketselectionunsolved'));
  });
  it('contain navigation new ticket',() => {
    expect(wrapper.find('Nav.Link.ticketselectionnew'));
  });
  it('contain navigation urgent ticket',() => {
    expect(wrapper.find('Nav.Link.ticketselectionurgent'));
  });
  it('contain navigation unassigend ticket',() => {
    expect(wrapper.find('Nav.Link.ticketselectionunassigned'));
  });
  it('contain navigation open ticket',() => {
    expect(wrapper.find('Nav.Link.ticketselectionopen'));
  });
  it('contain navigation pending ticket',() => {
    expect(wrapper.find('Nav.Link.ticketselectionpending'));
  });
  it('contain navigation solved ticket',() => {
    expect(wrapper.find('Nav.Link.ticketselectionsolved'));
  });




});
