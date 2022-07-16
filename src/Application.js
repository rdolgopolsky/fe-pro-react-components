import React from 'react';
import Header from "./components/header";
import Logo from "./components/logo";
import NavItem from "./components/navItem";
import Content from "./components/content";
import Article from "./components/article";
import Footer from "./components/footer";

const navLinks = [['Home', '/'], ['About us', '/#about'], ['Contact us', '/#contact'], ['Help page', '/#help']];

const articles = [
	{
		id: 1,
		title: '15 полезных однострочных выражений JavaScript',
		description: 'Улучшение JavaScript-кода за пару минут перевод 15 Helpful JavaScript One-Liners'
	},
	{
		id: 2,
		title: 'Полиморфизм простыми словами',
		description: 'Скорее всего вы уже встречались с понятием “полиморфизм” и даже помните примеры с наследованием, но они показывают далеко не всё'
	},
	{
		id: 3,
		title: 'Начало работы с Node.js',
		description: 'Node Hero: Глава 1'
	},
	{
		id: 4,
		title: 'Нейросети с нуля для JavaScript разработчиков (Часть 1: Перцептрон)',
		description: 'Перевод статьи Elyx0: Neural networks from scratch for Javascript linguists (Part1 The Perceptron).'
	},
	{
		id: 5,
		title: '8 практичных хитростей веб-разработчика применить немедленно!',
		description: 'HTML, CSS и JS хинты, которые полезно знать перевод 8 Tricks for Web Developers You Can Put Into Practice Immediately.'
	},
	{
		id: 6,
		title: 'Насколько JavaScript сильный?',
		description: 'Погружение в тему неявных преобразований. Где и как возникают и вычисляются неявные преобразования в JavaScript?'
	},
	{
		id: 7,
		title: 'Изучите CSS-переменные за 5 минут',
		description: 'Перевод статьи Per Harald Borgen: Learn CSS Variables in 5 minutes.'
	},
	{
		id: 8,
		title: 'Создание MEVN-приложения (Часть 1/2)',
		description: 'Создание full-stack приложения на основе Vue.js и Express.js (+MongoDB)'
	},
	{
		id: 9,
		title: 'Реактивность Vue.js',
		description: 'Реактивность фреймворка Vue.js и использование метода Vue.set'
	},
	{
		id: 10,
		title: 'Микроптимизации производительности и JavaScript',
		description: 'Недавно в комментариях на Hexlet я поучаствовал в дискуссии на тему «Что важнее — оптимизации производительности или качество кода?» Если…'
	},
	{
		id: 11,
		title: 'Девшахта-подкаст',
		description: '#108: Производительность кода — это важнейший критерий качества?'
	},
	{
		id: 12,
		title: 'Одна из самых красивых идей в информатике: Y-Combinator',
		description: 'Перевод статьи Lucas Fernandes da Costa “Y: The Most Beautiful Idea in Computer Science explained in JavaScript”'
	}
];

const Application = () => {
	return <div className="wrapper">
		<Header className="header">
			<Logo link="/">
				My logo
			</Logo>
			
			<nav>
				<ul className="nav-list">
					{navLinks.map(([text, link]) => <NavItem key={text} link={link}>{text}</NavItem>)}
				</ul>
			</nav>
		</Header>
		
		<Content>
			<section className="posts">
				<div className="container">
					<h1>
						Posts
					</h1>
					<ul className="list">
						{articles.map(({id, title, description}) => <Article key={id} title={title} description={description} />)}
					</ul>
				</div>
			</section>
		</Content>
	
		<Footer className="footer">
			<Logo>Logo</Logo>
			<p className="copyright">
				Small static blog @ {new Date().getFullYear()}
			</p>
		</Footer>
	</div>;
};

export default Application;
