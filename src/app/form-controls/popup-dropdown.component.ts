import { Component, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Component({
	selector: 'app-custom-popup-component',
	template: `
		<ul class="ids-popup-menu {{popupActive == true ? 'display':''}}" role="listbox">
			<li class="ids-popup-menu-option" *ngFor="let opt of values" id="{{opt}}" role="option"
			(click)="selectValue(opt)">
				<span class="ids-popup-option-content">{{opt}}</span>
			</li>
		</ul>`,
	styles: [`:host {
        width: 100% !important;
    }
    .ids-popup-menu {
			display: none;
			position: absolute;
			top: 3rem;
			text-align: left;
			min-width: calc(3 * 2.5rem);
			box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
				0px 1px 10px 0px rgba(0, 0, 0, 0.12);
			z-index: 950;
			color: #f8f8f8;
			padding-left : 0;
			background-color: #fff;
			border-color: #3e3d3d;
			border-radius: 8px;
			&:focus {
					border-color: #E06337;
			}
			&.display {
				display: block;
				width: auto !important;
				-webkit-animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
			}

			@-webkit-keyframes slide-in-top {
				0% {
					-webkit-transform: translateY(-800px);
									transform: translateY(-800px);
					opacity: 0;
				}
				100% {
					-webkit-transform: translateY(0);
									transform: translateY(0);
					opacity: 1;
				}
			}
			@keyframes slide-in-top {
				0% {
					-webkit-transform: translateY(-800px);
									transform: translateY(-800px);
					opacity: 0;
				}
				100% {
					-webkit-transform: translateY(0);
									transform: translateY(0);
					opacity: 1;
				}
			}

		.ids-popup-menu-option {
			height: 2.5rem;
			display: flex;
			align-items: center;
			border-bottom: 1px solid;
			font-size: 0.875rem;
			cursor: pointer;
			padding: 0 1rem;
			border-radius: 8px;
			// border-color: #3e3d3d;

			&:focus {
					// border-color: #E06337;
			}
			&:hover {
					background-color: #cfcfcf;
			}
			&:last-child {
				border: none;
			}

			.ids-popup-option-content {
				display: block;
				max-width: 8rem;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				color: #000000;
			}
		}
	}`]
})

export class PopupDropdownComponent {
	@Input() popupActive: boolean = false;
	@Input() values: string[];
	@Output() selected = new EventEmitter<any>();
	constructor(private eRef: ElementRef) {
	}

	selectValue(option: any) {
		this.selected.emit(option);
		this.popupActive = true;
	}
}
