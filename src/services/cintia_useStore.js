import create from 'zustand';
import produce from 'immer';

const useStore = create(set => ({
	modalState: null,
	modalMessages: {
		sent: 'Thank you for your review',
		delete: 'Do you really want to delete this review?',
		updated: 'Your review has been updated',
	},
	setModalState: modalState => {
		set({ modalState });
	},
	editmode: false,
	showEdit: () => {
		set({ editmode: true });
	},
	hideEdit: () => {
		set({ editmode: false });
	},
	smileySelect: '',
	select: key => {
		set(() => {
			return { smileySelect: key };
		});
	},
	id: [],
	setID: id => {
		set(() => {
			return { id: id };
		});
	},
	favoriteTrue: async id => {
		const favoriteReview = {
			favorite: true,
		};

		try {
			const response = await fetch('/api/review/' + id, {
				method: 'PUT',
				body: JSON.stringify(favoriteReview),
			});
			set(state => ({
				reviews: state.reviews.map(review =>
					review.id === id ? { ...review, favorite: true } : review
				),
			}));
			await response.json();
		} catch (error) {
			console.error(`Upps das war ein Fehler: ${error}`);
		}
	},
	favoriteFalse: async id => {
		const unfavoriteReview = {
			favorite: false,
		};
		try {
			const response = await fetch('/api/review/' + id, {
				method: 'PUT',
				body: JSON.stringify(unfavoriteReview),
			});
			set(state => ({
				reviews: state.reviews.map(review =>
					review.id === id ? { ...review, favorite: false } : review
				),
			}));
			await response.json();
		} catch (error) {
			console.error(`Upps das war ein Fehler: ${error}`);
		}
	},
	positions: {},
	updatePositions: (latitude, longitude, geoname) => {
		set({ positions: { lat: latitude, long: longitude, geoname: geoname } });
	},

	locationEdit: [],
	setLocationEdit: (positionslat, positionslong) => {
		set(() => {
			return { locationEdit: [positionslat, positionslong] };
		});
	},
	reviews: [],
	fetchReviews: async () => {
		try {
			const response = await fetch('/api/reviews');
			const data = await response.json();
			set({ reviews: data });
		} catch (error) {
			console.error(`Upps das war ein Fehler: ${error}`);
		}
	},
	zoomReview: [
		{
			location: {
				lat: 52.5,
				long: 13.4,
				geoname: 'testname',
			},
		},
	],
	zoomTo: id => {
		set(state => ({
			zoomReview: state.reviews.filter(review => review.id === id),
		}));
	},
	routedZoom: false,
	routedZoomOn: () => {
		set({ routedZoom: true });
	},
	routedZoomOff: () => {
		set({ routedZoom: false });
	},
	addReview: async (data, positionslat, positionslong, geoname) => {
		const newReview = {
			name: data.name,
			rating: data.rating,
			comment: data.comment,
			location: {
				lat: positionslat,
				long: positionslong,
				geoname: geoname,
			},
			image: data.image,
			altText: data.name,
			favorite: false,
		};
		try {
			const response = await fetch('/api/review/create', {
				method: 'POST',
				body: JSON.stringify(newReview),
			});
			await response.json();
			set(
				produce(draft => {
					draft.reviews.push({ ...newReview });
				})
			);
		} catch (error) {
			console.error(`Upps das war ein Fehler: ${error}`);
		}
	},

	deleteReview: async id => {
		try {
			const response = await fetch('/api/review/' + id, {
				method: 'DELETE',
			});
			set(state => {
				return {
					reviews: state.reviews.filter(review => review.id !== id),
				};
			});
			await response.json();
		} catch (error) {
			console.error(`Upps das war ein Fehler: ${error}`);
		}
	},
	editReview: async (data, id, positionslat, positionslong, geoname) => {
		const editedReview = {
			id: data.id,
			name: data.name,
			rating: data.rating,
			comment: data.comment,
			location: {
				lat: positionslat,
				long: positionslong,
				geoname: geoname,
			},
			image: data.image,
			altText: data.name,
			favorite: false,
		};
		try {
			const response = await fetch('/api/review/' + id, {
				method: 'PUT',
				body: JSON.stringify(editedReview),
			});
			await response.body;
			set(state => {
				return {
					reviews: state.reviews.map(review =>
						review.id === id
							? {
									...review,
									id: data.id,
									name: data.name,
									rating: data.rating,
									comment: data.comment,
									location: {
										lat: positionslat,
										long: positionslong,
										geoname: geoname,
									},
									image: data.image,
									altText: data.name,
									favorite: data.favorite,
							  }
							: review
					),
					entryToUpdate: null,
				};
			});
		} catch (error) {
			console.error(`Upps das war ein Fehler: ${error}`);
		}
	},
}));
export default useStore;
