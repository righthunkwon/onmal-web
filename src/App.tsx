import Header from '@/components/Header';

const App = () => {
	return (
		<>
			<div className="c-container">
				<Header headerProps={'야호'} />

				{/* 메인컨텐츠 */}
				<main className="c-content bg-blue-200">
					<span>바로 적용하는 다국어</span>
					기능 1 다국어 적용 가이드 제공 2 추천 번역 제공 3 컴포넌트 복붙 시
					한국어 텍스트파일만 감지해서 추천 번역 제공
				</main>

				{/* 하단푸터 */}
				<footer className="c-footer bg-yellow-200">푸터</footer>
			</div>
		</>
	);
};

export default App;
