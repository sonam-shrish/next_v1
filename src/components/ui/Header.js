import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

//material-ui imports

//core imports
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

// icons import
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

import Link from 'next/link';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		marginTop: '2em',
	},

	logoBtn: {
		padding: '0',
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
	tabsContainer: {
		marginLeft: 'auto',
	},
	tab: {
		...theme.typography.tab,
		minWidth: 10,
		marginLeft: '25px',
		color: 'white',
	},
	button: {
		...theme.typography.estimate,
		borderRadius: '50px',
		marginLeft: '50px',
	},
	list: {
		width: 250,
	},
	whiteText: {
		color: 'white',
	},
}));
//styled components
const DeskNavMenu = styled(Tabs)`
	display: none;
	@media screen and (min-width: 768px) {
		display: block;
	}
`;
const Hamburger = styled(IconButton)`
	margin-left: auto;
	display: block;
	color: white;
	@media screen and (min-width: 768px) {
		display: none;
	}
`;
const Header = (props) => {
	const router = useRouter();
	console.log(router);
	const classes = useStyles();

	const [activeTab, setActiveTab] = useState(0);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		switch (activeTab) {
			case 0:
				setActiveTab(0);
				return;
			case 1:
				setActiveTab(1);
				return;
			case 2:
				setActiveTab(3);
				return;
			case 3:
				setActiveTab(4);
		}
	}, [activeTab]);

	function ElevationScroll(props) {
		const { children } = props;

		const trigger = useScrollTrigger({
			disableHysteresis: true,
			threshold: 0,
		});

		return React.cloneElement(children, { elevation: trigger ? 4 : 0 });
	}
	//tabs
	const tabItems = [
		{ tabName: 'Home', link: '/', icon: <PersonIcon /> },

		{ tabName: 'Featured Jobs', link: '/featured_jobs', icon: <PersonIcon /> },
		{ tabName: 'Popular Jobs', link: '/popular_jobs', icon: <PersonIcon /> },
		{ tabName: 'Recent Jobs', link: '/recent_jobs', icon: <PersonIcon /> },
	];

	function handleActiveTab(e, value) {
		setActiveTab(value);
	}
	//hamburger
	function toggleDrawer(open) {
		setOpen(open);
	}

	//minors
	const date = new Date();

	return (
		<>
			<br />
			<br />
			<ElevationScroll>
				<AppBar position='fixed'>
					<Toolbar>
						<Link href='/'>
							<Button disableRipple className={classes.logoBtn}>
								kaamxa.com
							</Button>
						</Link>
						<DeskNavMenu
							value={activeTab}
							onChange={handleActiveTab}
							className={classes.tabsContainer}
						>
							{tabItems.map((tabItem) => (
								<Link key={tabItem.tabName} href={tabItem.link}>
									<Tab label={tabItem.tabName} className={classes.tab} />
								</Link>
							))}

							<Button
								className={classes.whiteText}
								size='small'
								variant='outlined'
							>
								How to Post a Job?
							</Button>
						</DeskNavMenu>
						<Hamburger onClick={() => toggleDrawer(true)}>
							<MenuIcon />
						</Hamburger>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />

			{/* Hamburger Drawer */}
			<Drawer anchor={'right'} open={open} onClose={() => toggleDrawer(false)}>
				<List className={classes.list}>
					<Link href='/sign-in'>
						<ListItem>
							<ListItemIcon>
								<PersonIcon />
							</ListItemIcon>
							<ListItemText>Sign In</ListItemText>
						</ListItem>
					</Link>

					<Link href='/sign-up'>
						<ListItem>
							<ListItemIcon>
								<PersonIcon />
							</ListItemIcon>
							<ListItemText>Sign Up</ListItemText>
						</ListItem>
					</Link>

					<Divider />
					{tabItems.map((navItem) => (
						<Link key={navItem.tabName} href={navItem.link}>
							<ListItem>
								<ListItemIcon>{navItem.icon}</ListItemIcon>
								<ListItemText>{navItem.tabName}</ListItemText>
							</ListItem>
						</Link>
					))}
				</List>
				<Divider />
				<ListItem>
					<ListItemIcon>
						<PlayCircleFilledIcon />
					</ListItemIcon>
					<ListItemText>How to post a Job?</ListItemText>
				</ListItem>
				<Divider />
				<ListItem>
					<ListItemText>Copyright Kaamxa {date.getFullYear()} </ListItemText>
				</ListItem>
			</Drawer>
		</>
	);
};

export default Header;
