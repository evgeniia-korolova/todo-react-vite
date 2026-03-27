import {
	HeaderContainer,
	HeaderLink,
	HeaderWrapper,
} from './Header.styled';

export const Header = () => {
	return (
		<HeaderWrapper>
			<HeaderContainer>
				<HeaderLink to='/'>Home</HeaderLink>
				<HeaderLink to='/list'>ToDo List</HeaderLink>
			</HeaderContainer>
		</HeaderWrapper>
	);
};
