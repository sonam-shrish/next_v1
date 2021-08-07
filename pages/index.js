import Head from 'next/head';
import '../styles/Home.module.css';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../src/theme';
import Header from '../src/components/ui/Header';
import CompanyJobVacancy from '../src/components/forms/vacancyForms/CompanyJobVacancy';

import SearchBar from '../src/components/ui/SearchBar';
import RecentJobs from '../src/components/home/RecentJobs/RecentJobs';

import styled from 'styled-components';
const App = styled.div`
	margin: auto;
	padding: 20px;

	@media only screen and (max-width: 414px) {
		padding: 0 10px;
		max-width: 400px;
		min-width: 360px;
		margin: auto;
	}

	@media only screen and (max-width: 1280px) {
		padding: 10px;
		max-width: 1000px;
		margin: auto;
	}

	@media only screen and (min-width: 1281px) {
		.App {
			max-width: 1440px;
			padding: 0 40px;
			margin: auto;
		}
	}
`;

export default function Home() {
	return (
		<App>
			<ThemeProvider theme={theme}>
				<Head>
					<title>Kamxa | </title>
					<meta name='description' content='This is Kamxa app' />
					<link rel='icon' href='/favicon.ico' />
				</Head>

				<main>
					<Header />
					<SearchBar />
					<CompanyJobVacancy />
					<RecentJobs />
					Hello
				</main>

				<footer>This is footer</footer>
			</ThemeProvider>
		</App>
	);
}
